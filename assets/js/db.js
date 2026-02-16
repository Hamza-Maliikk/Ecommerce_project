const url = "https://plqqyjfskhyeigagvbwk.supabase.co";
const key =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBscXF5amZza2h5ZWlnYWd2YndrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjI2NzE2NzAsImV4cCI6MjA3ODI0NzY3MH0.gUgnnAvVeIONv9w_sqw_wlaXJnKv4Rokxi8dLmzNIew";

export const supabaseClient = window.supabase.createClient(url, key);

console.log(supabaseClient);

// For signup 
export const handleSignup = async (email, password) => {
  const { data, error } = await supabaseClient.auth.signUp({
    email: email,
    password: password,
  });
  if (data) {
    console.log("User signed up:", data);
  }
  if (error) {
    console.error("Error signing up:", error);
  } 
};
