"use client";
import { supabase } from "@/lib/supabase/supabase";
import { Box, Paper, Typography } from "@mui/material";
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useAuth } from "../context/AuthContext";
import AuthRedirect from "./AuthRedirect";

const Login = () => {
  const { user } = useAuth();

  console.log("User: ", user);

  if (user) {
    return <AuthRedirect />;
  } else {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          p: 3,
        }}
      >
        <Paper
          elevation={3}
          sx={{
            p: 4,
            maxWidth: 400,
            width: "100%",
          }}
        >
          <Typography variant="h5" gutterBottom textAlign="center">
            Welcome
          </Typography>
          <Auth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: "#1976d2",
                    brandAccent: "#1565c0",
                  },
                },
              },
            }}
            providers={["google"]}
            socialLayout="horizontal"
            view="sign_in"
          />
        </Paper>
      </Box>
    );
  }
};

export default Login;
