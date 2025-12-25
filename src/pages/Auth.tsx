import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Leaf, User, Mail, Lock, ArrowRight, Loader2 } from "lucide-react";

type AuthMode = "login" | "signup";
type UserRole = "farmer" | "buyer";

const Auth = () => {
  const [searchParams] = useSearchParams();
  const roleParam = searchParams.get("role") as UserRole | null;
  
  const [mode, setMode] = useState<AuthMode>("signup");
  const [role, setRole] = useState<UserRole>(roleParam || "buyer");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [farmName, setFarmName] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (session?.user) {
        navigate("/");
      }
    });

    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session?.user) {
        navigate("/");
      }
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      if (mode === "signup") {
        const redirectUrl = `${window.location.origin}/`;
        
        const { data: authData, error: authError } = await supabase.auth.signUp({
          email,
          password,
          options: {
            emailRedirectTo: redirectUrl,
          },
        });

        if (authError) throw authError;

        if (authData.user) {
          // Create profile
          const { error: profileError } = await supabase
            .from("profiles")
            .insert({
              user_id: authData.user.id,
              full_name: fullName,
              location: location || null,
            });

          if (profileError) throw profileError;

          // Assign role
          const { error: roleError } = await supabase
            .from("user_roles")
            .insert({
              user_id: authData.user.id,
              role: role,
            });

          if (roleError) throw roleError;

          // If farmer, create farmer profile
          if (role === "farmer") {
            const { error: farmerError } = await supabase
              .from("farmers")
              .insert({
                user_id: authData.user.id,
                farm_name: farmName,
                is_organic: false,
                crops: [],
              });

            if (farmerError) throw farmerError;
          }

          toast({
            title: "Welcome to FarmFresh!",
            description: `Your ${role} account has been created successfully.`,
          });
        }
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) throw error;

        toast({
          title: "Welcome back!",
          description: "You've been logged in successfully.",
        });
      }
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message || "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-12 md:py-20">
        <div className="container">
          <div className="mx-auto max-w-md">
            {/* Header */}
            <div className="mb-8 text-center animate-fade-up">
              <div className="mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-hero text-primary-foreground">
                <Leaf className="h-8 w-8" />
              </div>
              <h1 className="mb-2 font-display text-3xl font-bold text-foreground">
                {mode === "login" ? "Welcome Back" : "Join FarmFresh"}
              </h1>
              <p className="text-muted-foreground">
                {mode === "login"
                  ? "Sign in to continue to your account"
                  : role === "farmer"
                  ? "Create your farmer account and start selling"
                  : "Create your account and discover fresh produce"}
              </p>
            </div>

            {/* Role Toggle (only for signup) */}
            {mode === "signup" && (
              <div className="mb-6 flex rounded-xl bg-muted p-1 animate-fade-up" style={{ animationDelay: "0.1s" }}>
                <button
                  type="button"
                  onClick={() => setRole("buyer")}
                  className={`flex-1 rounded-lg py-3 text-sm font-medium transition-all ${
                    role === "buyer"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <User className="mr-2 inline h-4 w-4" />
                  I'm a Buyer
                </button>
                <button
                  type="button"
                  onClick={() => setRole("farmer")}
                  className={`flex-1 rounded-lg py-3 text-sm font-medium transition-all ${
                    role === "farmer"
                      ? "bg-card text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Leaf className="mr-2 inline h-4 w-4" />
                  I'm a Farmer
                </button>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="rounded-2xl bg-card p-6 shadow-card">
                {mode === "signup" && (
                  <>
                    <div className="mb-4">
                      <Label htmlFor="fullName" className="mb-2 block text-sm font-medium">
                        Full Name
                      </Label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                        <Input
                          id="fullName"
                          type="text"
                          placeholder="John Doe"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="h-12 pl-12"
                          required
                        />
                      </div>
                    </div>

                    {role === "farmer" && (
                      <div className="mb-4">
                        <Label htmlFor="farmName" className="mb-2 block text-sm font-medium">
                          Farm Name
                        </Label>
                        <div className="relative">
                          <Leaf className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                          <Input
                            id="farmName"
                            type="text"
                            placeholder="Green Valley Farm"
                            value={farmName}
                            onChange={(e) => setFarmName(e.target.value)}
                            className="h-12 pl-12"
                            required
                          />
                        </div>
                      </div>
                    )}

                    <div className="mb-4">
                      <Label htmlFor="location" className="mb-2 block text-sm font-medium">
                        Location (Optional)
                      </Label>
                      <Input
                        id="location"
                        type="text"
                        placeholder="City, State"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        className="h-12"
                      />
                    </div>
                  </>
                )}

                <div className="mb-4">
                  <Label htmlFor="email" className="mb-2 block text-sm font-medium">
                    Email Address
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-12 pl-12"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <Label htmlFor="password" className="mb-2 block text-sm font-medium">
                    Password
                  </Label>
                  <div className="relative">
                    <Lock className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                    <Input
                      id="password"
                      type="password"
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="h-12 pl-12"
                      required
                      minLength={6}
                    />
                  </div>
                </div>

                <Button type="submit" variant="hero" size="lg" className="w-full" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      {mode === "login" ? "Sign In" : "Create Account"}
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            </form>

            {/* Toggle Mode */}
            <p className="mt-6 text-center text-sm text-muted-foreground animate-fade-up" style={{ animationDelay: "0.3s" }}>
              {mode === "login" ? (
                <>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className="font-medium text-primary hover:underline"
                  >
                    Sign up
                  </button>
                </>
              ) : (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="font-medium text-primary hover:underline"
                  >
                    Sign in
                  </button>
                </>
              )}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Auth;
