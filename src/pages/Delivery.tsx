import { useState } from 'react';
import { motion } from 'framer-motion';
import { Truck, Plus, Search, Filter, MapPin, Phone } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import AddAgentDialog from '@/components/dialogs/AddAgentDialog';
import { useAuth } from '@/contexts/AuthContext';
import { mockDeliveryAgentsByStore } from '@/data/mockData';

const Delivery = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const { currentStore } = useAuth();
  
  // Get store-specific delivery agents
  const deliveryAgents = currentStore ? mockDeliveryAgentsByStore[currentStore.id] || [] : [];

  const getAgentStatusColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'on delivery':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'off duty':
        return 'bg-red-100 text-red-800 border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-6 space-y-4 md:space-y-6"
    >
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <h1 className="text-2xl md:text-3xl font-bold text-foreground">Delivery Management</h1>
        <Button 
          className="bg-primary text-primary-foreground hover:bg-primary/90"
          onClick={() => setShowAddDialog(true)}
        >
          <Plus className="mr-2 h-4 w-4" />
          Add Agent
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
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
                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
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
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4">
                    <div className="text-right">
                       <p className="font-semibold text-card-foreground">
                        {agent.ordersDelivered} deliveries
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Rating: {agent.rating}/5.0
                      </p>
                    </div>
                     {agent.status === 'on delivery' && (
                      <div className="text-right">
                        <p className="text-sm font-medium text-card-foreground">
                          On Delivery
                        </p>
                        <p className="text-xs text-muted-foreground">
                          Order in progress
                        </p>
                      </div>
                    )}
                    <Badge className={`${getAgentStatusColor(agent.status)} border`}>
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