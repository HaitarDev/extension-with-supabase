const { createClient } = require("@supabase/supabase-js");

const supabaseUrl = "https://zxgslpwjlvlrdfjmnryf.supabase.co";
// const supabaseKey = process.env.SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

// -----------------------------------------------------------------------------

function loadDashboard() {
  chrome.tabs.create({ url: "dashboard.html" });
}

// sign in
document.getElementById("login").addEventListener("click", async () => {
  const { user, error } = await supabase.auth.signIn({
    provider: "google", // or any other supported provider
  });

  if (error) {
    console.error("Login error:", error.message);
  } else {
    console.log("User logged in:", user);
    // Redirect to dashboard or load dashboard content in the popup
    loadDashboard();
  }
});

// sign up
document.getElementById("createAccount").addEventListener("click", async () => {
  const { user, error } = await supabase.auth.signUp({
    email: "user@email.com",
    password: "password",
  });

  if (error) {
    console.error("Signup error:", error.message);
  } else {
    console.log("User created:", user);
    // Redirect to dashboard or perform other actions
  }
});
