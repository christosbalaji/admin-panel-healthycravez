import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import SplashScreen from "./components/auth/SplashScreen";
import LoginPage from "./components/auth/LoginPage";
import AdminLayout from "./components/layout/AdminLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    // Check for saved authentication state
    const savedAuth = localStorage.getItem('hc-admin-auth');
    if (savedAuth) {
      const authData = JSON.parse(savedAuth);
      setIsAuthenticated(authData.isAuthenticated);
      setIsAdmin(authData.isAdmin);
    }
  }, []);

  const handleSplashComplete = () => {
    setShowSplash(false);
  };

  const handleLogin = (adminStatus: boolean) => {
    setIsAuthenticated(true);
    setIsAdmin(adminStatus);
    // Save authentication state
    localStorage.setItem('hc-admin-auth', JSON.stringify({
      isAuthenticated: true,
      isAdmin: adminStatus,
      timestamp: Date.now()
    }));
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setIsAdmin(false);
    localStorage.removeItem('hc-admin-auth');
  };

  if (showSplash) {
    return <SplashScreen onComplete={handleSplashComplete} />;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes */}
            <Route 
              path="/" 
              element={
                isAuthenticated && isAdmin ? (
                  <Navigate to="/dashboard" replace />
                ) : (
                  <LoginPage onLogin={handleLogin} />
                )
              } 
            />
            
            {/* Protected admin routes */}
            {isAuthenticated && isAdmin && (
              <Route path="/*" element={<AdminLayout onLogout={handleLogout} />}>
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="inventory" element={<div className="p-6">Inventory Management (Coming Soon)</div>} />
                <Route path="stores" element={<div className="p-6">Store Management (Coming Soon)</div>} />
                <Route path="users" element={<div className="p-6">User Management (Coming Soon)</div>} />
                <Route path="orders" element={<div className="p-6">Order Management (Coming Soon)</div>} />
                <Route path="subscriptions" element={<div className="p-6">Subscription Management (Coming Soon)</div>} />
                <Route path="delivery" element={<div className="p-6">Delivery Management (Coming Soon)</div>} />
                <Route path="analytics" element={<div className="p-6">Analytics Dashboard (Coming Soon)</div>} />
                <Route path="settings" element={<div className="p-6">Settings (Coming Soon)</div>} />
              </Route>
            )}
            
            {/* Catch-all redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
