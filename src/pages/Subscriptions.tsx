import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Plus, Search, Filter, RefreshCw, Crown } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import CreatePlanDialog from '@/components/dialogs/CreatePlanDialog';

const Subscriptions = () => {
  const [showCreateDialog, setShowCreateDialog] = useState(false);
  const subscriptions = [
    {
      id: 1,
      customer: 'Alice Johnson',
      plan: 'Weekly Premium',
      price: 89.99,
      status: 'Active',
      nextDelivery: '2024-01-22',
      startDate: '2024-01-01'
    },
    {
      id: 2,
      customer: 'Bob Smith',
      plan: 'Monthly Basic',
      price: 199.99,
      status: 'Active',
      nextDelivery: '2024-02-15',
      startDate: '2023-12-15'
    },
    {
      id: 3,
      customer: 'Carol Davis',
      plan: 'Weekly Standard',
      price: 65.99,
      status: 'Paused',
      nextDelivery: 'Paused',
      startDate: '2023-11-20'
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
        <h1 className="text-3xl font-bold text-foreground">Subscription Management</h1>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => setShowCreateDialog(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Create Plan
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search subscriptions..."
            className="pl-10 bg-background border-border"
          />
        </div>
        <Button variant="outline" className="border-border">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4">
        {subscriptions.map((subscription) => (
          <motion.div
            key={subscription.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-card border-border animate-3d-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      {subscription.plan.includes('Premium') ? (
                        <Crown className="h-6 w-6 text-primary" />
                      ) : (
                        <Calendar className="h-6 w-6 text-primary" />
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{subscription.customer}</h3>
                      <p className="text-muted-foreground">{subscription.plan}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold text-card-foreground">${subscription.price}/month</p>
                      <p className="text-sm text-muted-foreground">
                        Next: {subscription.nextDelivery}
                      </p>
                    </div>
                    <Badge variant={subscription.status === 'Active' ? 'default' : 'secondary'}>
                      {subscription.status}
                    </Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <RefreshCw className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        Manage
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <CreatePlanDialog 
        open={showCreateDialog} 
        onOpenChange={setShowCreateDialog} 
      />
    </motion.div>
  );
};

export default Subscriptions;