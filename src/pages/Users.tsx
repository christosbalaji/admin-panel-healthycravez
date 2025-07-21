import { motion } from 'framer-motion';
import { User, Plus, Search, Filter, Mail, Shield, MoreVertical } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const Users = () => {
  const users = [
    {
      id: 1,
      name: 'Alice Johnson',
      email: 'alice@example.com',
      role: 'Customer',
      status: 'Active',
      joinDate: '2024-01-15',
      orders: 24
    },
    {
      id: 2,
      name: 'Bob Smith',
      email: 'bob@example.com',
      role: 'Delivery Agent',
      status: 'Active',
      joinDate: '2024-02-20',
      deliveries: 156
    },
    {
      id: 3,
      name: 'Carol Davis',
      email: 'carol@example.com',
      role: 'Customer',
      status: 'Inactive',
      joinDate: '2023-11-08',
      orders: 8
    },
    {
      id: 4,
      name: 'David Wilson',
      email: 'david@example.com',
      role: 'Store Manager',
      status: 'Active',
      joinDate: '2023-09-12',
      store: 'Downtown Location'
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
        <h1 className="text-3xl font-bold text-foreground">User Management</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Add User
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search users..."
            className="pl-10 bg-background border-border"
          />
        </div>
        <Button variant="outline" className="border-border">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4">
        {users.map((user) => (
          <motion.div
            key={user.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-card border-border animate-3d-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-12 w-12">
                      <AvatarFallback className="bg-primary/10 text-primary">
                        {user.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{user.name}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Mail className="h-4 w-4" />
                        <span className="text-sm">{user.email}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="flex items-center gap-2 mb-1">
                        <Shield className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm font-medium text-card-foreground">{user.role}</span>
                      </div>
                      <p className="text-xs text-muted-foreground">
                        Joined: {user.joinDate}
                      </p>
                    </div>
                    <Badge variant={user.status === 'Active' ? 'default' : 'secondary'}>
                      {user.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Users;