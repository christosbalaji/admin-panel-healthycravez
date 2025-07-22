import { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Plus, Search, Filter, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import AddAgentDialog from '@/components/dialogs/AddAgentDialog';

const Delivery = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const deliveryAgents = [
    {
      id: 1,
      name: 'Mike Johnson',
      phone: '(555) 123-4567',
      status: 'Available',
      currentOrder: null,
      totalDeliveries: 156,
      rating: 4.8
    },
    {
      id: 2,
      name: 'Sarah Davis',
      phone: '(555) 987-6543',
      status: 'On Delivery',
      currentOrder: '#ORD002',
      totalDeliveries: 203,
      rating: 4.9
    },
    {
      id: 3,
      name: 'Tom Wilson',
      phone: '(555) 456-7890',
      status: 'Off Duty',
      currentOrder: null,
      totalDeliveries: 89,
      rating: 4.6
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
        <h1 className="text-3xl font-bold text-foreground">Delivery Management</h1>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => setShowAddDialog(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Agent
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search delivery agents..."
            className="pl-10 bg-background border-border"
          />
        </div>
        <Button variant="outline" className="border-border">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4">
        {deliveryAgents.map((agent) => (
          <motion.div
            key={agent.id}
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
                        {agent.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{agent.name}</h3>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <Phone className="h-4 w-4" />
                        <span className="text-sm">{agent.phone}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold text-card-foreground">
                        {agent.totalDeliveries} deliveries
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Rating: {agent.rating}/5.0
                      </p>
                    </div>
                    {agent.currentOrder && (
                      <div className="text-right">
                        <p className="text-sm font-medium text-card-foreground">
                          Current Order
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {agent.currentOrder}
                        </p>
                      </div>
                    )}
                    <Badge 
                      variant={
                        agent.status === 'Available' ? 'default' : 
                        agent.status === 'On Delivery' ? 'secondary' : 
                        'outline'
                      }
                    >
                      {agent.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      <MapPin className="h-4 w-4 mr-1" />
                      Track
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <AddAgentDialog 
        open={showAddDialog} 
        onOpenChange={setShowAddDialog} 
      />
    </motion.div>
  );
};

export default Delivery;