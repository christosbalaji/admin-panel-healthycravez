import { motion } from 'framer-motion';
import { Settings as SettingsIcon, User, Shield, Bell, Database, Globe } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Switch } from '@/components/ui/switch';

const Settings = () => {
  const settingsSections = [
    {
      title: 'Profile Settings',
      icon: User,
      description: 'Manage your account information',
      settings: [
        { name: 'Admin Name', type: 'input', value: 'Admin User' },
        { name: 'Email', type: 'input', value: 'admin@healthycravez.com' },
        { name: 'Phone', type: 'input', value: '(555) 123-4567' }
      ]
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'Configure security and access controls',
      settings: [
        { name: 'Two-Factor Authentication', type: 'switch', value: true },
        { name: 'Session Timeout (minutes)', type: 'input', value: '30' },
        { name: 'Password Complexity', type: 'switch', value: true }
      ]
    },
    {
      title: 'Notifications',
      icon: Bell,
      description: 'Manage notification preferences',
      settings: [
        { name: 'Email Notifications', type: 'switch', value: true },
        { name: 'SMS Alerts', type: 'switch', value: false },
        { name: 'Low Inventory Alerts', type: 'switch', value: true },
        { name: 'New Order Notifications', type: 'switch', value: true }
      ]
    },
    {
      title: 'System Settings',
      icon: Database,
      description: 'Configure system-wide settings',
      settings: [
        { name: 'Auto Backup', type: 'switch', value: true },
        { name: 'Maintenance Mode', type: 'switch', value: false },
        { name: 'Data Retention (days)', type: 'input', value: '365' }
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Settings</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          Save Changes
        </Button>
      </div>

      <div className="grid gap-6">
        {settingsSections.map((section, index) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-card border-border animate-3d-hover">
              <CardHeader>
                <CardTitle className="text-card-foreground flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3>{section.title}</h3>
                    <p className="text-sm text-muted-foreground font-normal">
                      {section.description}
                    </p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {section.settings.map((setting) => (
                  <div key={setting.name} className="flex items-center justify-between">
                    <label className="text-sm font-medium text-card-foreground">
                      {setting.name}
                    </label>
                    {setting.type === 'switch' ? (
                      <Switch defaultChecked={setting.value as boolean} />
                    ) : (
                      <Input
                        defaultValue={setting.value as string}
                        className="w-48 bg-background border-border"
                      />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Settings;