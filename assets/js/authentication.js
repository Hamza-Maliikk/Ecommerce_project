// Sign up THrough OTP

const { data, error } = await supabase.auth.signInWithOtp({
  email: 'example@email.com',
  options: {
    emailRedirectTo: 'https://example.com/welcome'
  }
})