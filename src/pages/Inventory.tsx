import { motion } from 'framer-motion';
import { Package, Plus, Search, Filter, Edit, Trash2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';

const Inventory = () => {
  const inventoryItems = [
    { id: 1, name: 'Grilled Chicken Salad', category: 'Salads', price: 12.99, stock: 25, status: 'Available' },
    { id: 2, name: 'Quinoa Bowl', category: 'Bowls', price: 14.50, stock: 18, status: 'Available' },
    { id: 3, name: 'Green Smoothie', category: 'Beverages', price: 8.99, stock: 0, status: 'Out of Stock' },
    { id: 4, name: 'Protein Wrap', category: 'Wraps', price: 11.75, stock: 32, status: 'Available' },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Inventory Management</h1>
        <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
          <Plus className="mr-2 h-4 w-4" />
          Add Item
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search inventory items..."
            className="pl-10 bg-background border-border"
          />
        </div>
        <Button variant="outline" className="border-border">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4">
        {inventoryItems.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-card border-border animate-3d-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <Package className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{item.name}</h3>
                      <p className="text-muted-foreground">{item.category}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold text-card-foreground">${item.price}</p>
                      <p className="text-sm text-muted-foreground">Stock: {item.stock}</p>
                    </div>
                    <Badge variant={item.status === 'Available' ? 'default' : 'destructive'}>
                      {item.status}
                    </Badge>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="outline">
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
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

export default Inventory;