import { motion } from 'framer-motion';
import { Store, Plus, MapPin, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Stores = () => {
  const stores = [
    {
      id: 1,
      name: 'Downtown Location',
      address: '123 Main St, City Center',
      phone: '(555) 123-4567',
      hours: '8:00 AM - 9:00 PM',
      status: 'Open',
      manager: 'John Smith'
    },
    {
      id: 2,
      name: 'Uptown Branch',
      address: '456 Oak Ave, North District',
      phone: '(555) 987-6543',
      hours: '9:00 AM - 8:00 PM',
      status: 'Open',
      manager: 'Sarah Johnson'
    },
    {
      id: 3,
      name: 'Mall Outlet',
      address: '789 Shopping Blvd, Mall Level 2',
      phone: '(555) 456-7890',
      hours: '10:00 AM - 10:00 PM',
      status: 'Closed',
      manager: 'Mike Davis'
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
        <h1 className="text-3xl font-bold text-foreground">Store Management</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Store
        </Button>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map((store) => (
          <motion.div
            key={store.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: store.id * 0.1 }}
          >
            <Card className="bg-card border-border animate-3d-hover">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <Store className="h-5 w-5 text-primary" />
                    </div>
                    <CardTitle className="text-card-foreground">{store.name}</CardTitle>
                  </div>
                  <Badge variant={store.status === 'Open' ? 'default' : 'secondary'}>
                    {store.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-2">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-1" />
                  <p className="text-sm text-muted-foreground">{store.address}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">{store.phone}</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">{store.hours}</p>
                </div>
                <div className="pt-2 border-t border-border">
                  <p className="text-sm font-medium text-card-foreground">Manager: {store.manager}</p>
                </div>
                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="flex-1">
                    Edit
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Stores;