import { motion } from 'framer-motion';
import { User, Shield, Settings as SettingsIcon, Search, Plus, MoreVertical, Activity, Database, Eye, ChevronDown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import AddUserDialog from '@/components/dialogs/AddUserDialog';
import { useState } from 'react';

const Settings = () => {
  const [isAddUserOpen, setIsAddUserOpen] = useState(false);

  const roles = [
    {
      title: 'Super Admin',
      badge: 'Full Access',
      badgeColor: 'bg-red-500',
      description: 'Complete system access and user management'
    },
    {
      title: 'Store Manager',
      badge: 'Store Operations',
      badgeColor: 'bg-orange-500',
      description: 'Inventory, orders, and customer management'
    },
    {
      title: 'Delivery Coordinator',
      badge: 'Delivery Focus',
      badgeColor: 'bg-blue-500',
      description: 'Delivery agents and order tracking'
    },
    {
      title: 'Inventory Manager',
      badge: 'Inventory Only',
      badgeColor: 'bg-yellow-500',
      description: 'Product and stock management'
    }
  ];

  const adminUsers = [
    {
      name: 'Super Admin',
      email: 'admin@healthycravez.com',
      role: 'super admin',
      permissions: 'all',
      status: 'active',
      lastLogin: '2024-01-15 10:30 AM',
      created: '2023-01-01'
    },
    {
      name: 'Store Manager',
      email: 'manager@healthycravez.com',
      role: 'store manager',
      permissions: 'inventory, orders, +1 more',
      status: 'active',
      lastLogin: '2024-01-15 09:15 AM',
      created: '2023-06-15'
    },
    {
      name: 'Delivery Coordinator',
      email: 'delivery@healthycravez.com',
      role: 'delivery coordinator',
      permissions: 'delivery, orders',
      status: 'active',
      lastLogin: '2024-01-15 08:45 AM',
      created: '2023-08-20'
    },
    {
      name: 'Inventory Manager',
      email: 'inventory@healthycravez.com',
      role: 'inventory manager',
      permissions: 'inventory, stores',
      status: 'inactive',
      lastLogin: '2024-01-10 02:30 PM',
      created: '2023-12-01'
    }
  ];

  const auditActivities = [
    {
      timestamp: '2024-01-15 10:25 AM',
      adminUser: 'Super Admin',
      action: 'Updated inventory item',
      resource: 'Grilled Chicken Salad',
      details: 'Updated price from $11.99 to $12.99',
      severity: 'medium'
    },
    {
      timestamp: '2024-01-15 09:15 AM',
      adminUser: 'Store Manager',
      action: 'Created new user',
      resource: 'Customer #2341',
      details: 'Created customer account for jane.doe@em...',
      severity: 'low'
    },
    {
      timestamp: '2024-01-15 08:50 AM',
      adminUser: 'Delivery Coordinator',
      action: 'Assigned delivery agent',
      resource: 'Order #ORD-001',
      details: 'Assigned Alex Driver to delivery #DEL-001',
      severity: 'low'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6 bg-white min-h-screen"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-900">Admin Settings</h1>
        <Button 
          onClick={() => setIsAddUserOpen(true)}
          className="bg-primary text-white hover:bg-primary/90 flex items-center gap-2"
        >
          <Plus className="h-4 w-4" />
          Add Admin User
        </Button>
      </div>

      <Tabs defaultValue="admin-access" className="w-full">
        <TabsList className="grid w-full grid-cols-3 bg-gray-100">
          <TabsTrigger value="admin-access" className="flex items-center gap-2">
            <User className="h-4 w-4" />
            Admin Access
          </TabsTrigger>
          <TabsTrigger value="audit-trail" className="flex items-center gap-2">
            <Activity className="h-4 w-4" />
            Audit Trail
          </TabsTrigger>
          <TabsTrigger value="system-settings" className="flex items-center gap-2">
            <SettingsIcon className="h-4 w-4" />
            System Settings
          </TabsTrigger>
        </TabsList>

        <TabsContent value="admin-access" className="space-y-6">
          {/* Role-Based Access Control */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Role-Based Access Control</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {roles.map((role, index) => (
                <Card key={role.title} className="bg-white border border-gray-200 hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="space-y-3">
                      <h3 className="font-semibold text-gray-900">{role.title}</h3>
                      <Badge className={`${role.badgeColor} text-white text-xs px-2 py-1`}>
                        {role.badge}
                      </Badge>
                      <p className="text-sm text-gray-600">{role.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Admin Users */}
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-xl font-semibold text-gray-900">Admin Users</h2>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search admins..." 
                  className="pl-10 w-64 bg-white border-gray-300"
                />
              </div>
            </div>
            
            <Card className="bg-white border border-gray-200">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-200">
                    <TableHead className="text-gray-600">Admin User</TableHead>
                    <TableHead className="text-gray-600">Role</TableHead>
                    <TableHead className="text-gray-600">Permissions</TableHead>
                    <TableHead className="text-gray-600">Status</TableHead>
                    <TableHead className="text-gray-600">Last Login</TableHead>
                    <TableHead className="text-gray-600">Created</TableHead>
                    <TableHead className="text-gray-600">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {adminUsers.map((user, index) => (
                    <TableRow key={index} className="border-gray-200">
                      <TableCell>
                        <div>
                          <p className="font-medium text-gray-900">{user.name}</p>
                          <p className="text-sm text-gray-500">{user.email}</p>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge 
                          className={`${
                            user.role === 'super admin' ? 'bg-red-500' :
                            user.role === 'store manager' ? 'bg-orange-500' :
                            user.role === 'delivery coordinator' ? 'bg-blue-500' :
                            'bg-yellow-500'
                          } text-white text-xs`}
                        >
                          {user.role}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-700">{user.permissions}</TableCell>
                      <TableCell>
                        <Badge 
                          className={`${
                            user.status === 'active' ? 'bg-green-500' : 'bg-gray-500'
                          } text-white text-xs`}
                        >
                          {user.status}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-gray-700">{user.lastLogin}</TableCell>
                      <TableCell className="text-gray-700">{user.created}</TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="audit-trail" className="space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900">Admin Activity Audit Trail</h2>
            <div className="flex items-center gap-4">
              <Select defaultValue="all">
                <SelectTrigger className="w-48 bg-white border-gray-300">
                  <SelectValue placeholder="All Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severity</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Button variant="outline" className="border-gray-300">
                Export Logs
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium text-gray-900">Recent Admin Activities</h3>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input 
                  placeholder="Search activities..." 
                  className="pl-10 w-64 bg-white border-gray-300"
                />
              </div>
            </div>
            
            <Card className="bg-white border border-gray-200">
              <Table>
                <TableHeader>
                  <TableRow className="border-gray-200">
                    <TableHead className="text-gray-600">Timestamp</TableHead>
                    <TableHead className="text-gray-600">Admin User</TableHead>
                    <TableHead className="text-gray-600">Action</TableHead>
                    <TableHead className="text-gray-600">Resource</TableHead>
                    <TableHead className="text-gray-600">Details</TableHead>
                    <TableHead className="text-gray-600">Severity</TableHead>
                    <TableHead className="text-gray-600">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {auditActivities.map((activity, index) => (
                    <TableRow key={index} className="border-gray-200">
                      <TableCell className="text-gray-700">{activity.timestamp}</TableCell>
                      <TableCell className="text-gray-900 font-medium">{activity.adminUser}</TableCell>
                      <TableCell className="text-gray-700">{activity.action}</TableCell>
                      <TableCell className="text-gray-700">{activity.resource}</TableCell>
                      <TableCell className="text-gray-600 max-w-xs truncate">{activity.details}</TableCell>
                      <TableCell>
                        <Badge 
                          className={`${
                            activity.severity === 'high' ? 'bg-red-500' :
                            activity.severity === 'medium' ? 'bg-yellow-500' :
                            'bg-green-500'
                          } text-white text-xs`}
                        >
                          {activity.severity}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="system-settings" className="space-y-6">
          <h2 className="text-xl font-semibold text-gray-900">System Configuration</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Security Settings */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Security Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Two-Factor Authentication</h4>
                    <p className="text-sm text-gray-600">Require 2FA for all admin accounts</p>
                  </div>
                  <Button variant="outline" className="border-gray-300">
                    Configure
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Session Timeout</h4>
                    <p className="text-sm text-gray-600">Auto-logout after inactivity</p>
                  </div>
                  <Select defaultValue="30min">
                    <SelectTrigger className="w-32 bg-white border-gray-300">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="15min">15 min</SelectItem>
                      <SelectItem value="30min">30 min</SelectItem>
                      <SelectItem value="60min">60 min</SelectItem>
                      <SelectItem value="120min">2 hours</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Password Policy</h4>
                    <p className="text-sm text-gray-600">Minimum password requirements</p>
                  </div>
                  <Button variant="outline" className="border-gray-300">
                    Edit Policy
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Notification Settings */}
            <Card className="bg-white border border-gray-200">
              <CardHeader>
                <CardTitle className="text-lg font-semibold text-gray-900">Notification Settings</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Email Notifications</h4>
                    <p className="text-sm text-gray-600">System alerts and reports</p>
                  </div>
                  <Button variant="outline" className="border-gray-300">
                    Configure
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Audit Log Alerts</h4>
                    <p className="text-sm text-gray-600">High-severity activity alerts</p>
                  </div>
                  <Button variant="outline" className="border-gray-300">
                    Setup
                  </Button>
                </div>
                
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium text-gray-900">Report Schedule</h4>
                    <p className="text-sm text-gray-600">Automated daily/weekly reports</p>
                  </div>
                  <Button variant="outline" className="border-gray-300">
                    Schedule
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>

      <AddUserDialog 
        open={isAddUserOpen} 
        onOpenChange={setIsAddUserOpen} 
      />
    </motion.div>
  );
};

export default Settings;