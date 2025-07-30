import { motion } from 'framer-motion';
import { Bell, Search, User, Moon, Sun, Store } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';

const TopBar = () => {
  const [isDark, setIsDark] = useState(true);
  const [notifications] = useState(3);
  const { currentManager, currentStore } = useAuth();

  return (
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="glass-card border-b border-white/10 p-4 flex items-center justify-between relative z-10"
    >
      {/* Search */}
      <div className="flex-1 max-w-md">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            placeholder="Search anything..."
            className="pl-10 glass-card border-white/20 focus:border-primary/50 bg-background-secondary/50"
          />
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4">
        {/* Theme toggle */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDark(!isDark)}
            className="p-2 hover:bg-white/10"
          >
            <motion.div
              animate={{ rotate: isDark ? 0 : 180 }}
              transition={{ duration: 0.3 }}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </motion.div>
          </Button>
        </motion.div>

        {/* Notifications */}
        <motion.div 
          className="relative"
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
        >
          <Button
            variant="ghost"
            size="sm"
            className="p-2 hover:bg-white/10 relative"
          >
            <Bell className="h-4 w-4" />
            {notifications > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-1 -right-1"
              >
                <Badge 
                  variant="destructive" 
                  className="h-5 w-5 p-0 flex items-center justify-center text-xs animate-glow"
                >
                  {notifications}
                </Badge>
              </motion.div>
            )}
          </Button>
        </motion.div>

        {/* Store info */}
        {currentStore && (
          <motion.div
            className="flex items-center space-x-2 px-3 py-2 bg-primary/10 rounded-lg border border-primary/20"
            whileHover={{ scale: 1.02 }}
          >
            <Store className="h-4 w-4 text-primary" />
            <div className="text-sm">
              <p className="font-medium text-foreground">{currentStore.name}</p>
            </div>
          </motion.div>
        )}

        {/* User profile */}
        <motion.div
          className="flex items-center space-x-3 pl-4 border-l border-white/10"
          whileHover={{ scale: 1.02 }}
        >
          <div className="text-right">
            <p className="text-sm font-medium">{currentManager?.name || 'Store Manager'}</p>
            <p className="text-xs text-muted-foreground">Store Manager</p>
          </div>
          <motion.div
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 20px hsl(var(--primary) / 0.3)"
            }}
            transition={{ type: "spring", damping: 15 }}
          >
            <Avatar className="h-10 w-10 ring-2 ring-primary/20">
              <AvatarImage src="/api/placeholder/40/40" />
              <AvatarFallback className="bg-gradient-primary text-white">
                {currentManager?.name?.charAt(0) || <User className="h-5 w-5" />}
              </AvatarFallback>
            </Avatar>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default TopBar;