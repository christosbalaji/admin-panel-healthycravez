import { motion } from 'framer-motion';
import { ShoppingBag, Search, Filter, Clock, CheckCircle, XCircle, Download } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { useToast } from '@/hooks/use-toast';

const Orders = () => {
  const { toast } = useToast();
  const orders = [
    {
      id: '#ORD001',
      customer: 'Alice Johnson',
      items: 3,
      total: 45.99,
      status: 'Delivered',
      date: '2024-01-15',
      time: '2:30 PM'
    },
    {
      id: '#ORD002',
      customer: 'Bob Smith',
      items: 2,
      total: 28.50,
      status: 'In Progress',
      date: '2024-01-15',
      time: '3:15 PM'
    },
    {
      id: '#ORD003',
      customer: 'Carol Davis',
      items: 1,
      total: 12.99,
      status: 'Pending',
      date: '2024-01-15',
      time: '3:45 PM'
    },
    {
      id: '#ORD004',
      customer: 'David Wilson',
      items: 4,
      total: 67.25,
      status: 'Cancelled',
      date: '2024-01-15',
      time: '4:20 PM'
    }
  ];

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'Delivered':
        return <CheckCircle className="h-4 w-4" />;
      case 'In Progress':
        return <Clock className="h-4 w-4" />;
      case 'Cancelled':
        return <XCircle className="h-4 w-4" />;
      default:
        return <Clock className="h-4 w-4" />;
    }
  };

  const getStatusVariant = (status: string) => {
    switch (status) {
      case 'Delivered':
        return 'default';
      case 'In Progress':
        return 'secondary';
      case 'Cancelled':
        return 'destructive';
      default:
        return 'outline';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-6 space-y-6"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-foreground">Order Management</h1>
        <Button 
          variant="outline" 
          className="border-border"
          onClick={() => {
            // Generate CSV data
            const csvContent = [
              ['Order ID', 'Customer', 'Items', 'Total', 'Status', 'Date', 'Time'],
              ...orders.map(order => [
                order.id,
                order.customer,
                order.items.toString(),
                `$${order.total}`,
                order.status,
                order.date,
                order.time
              ])
            ].map(row => row.join(',')).join('\n');
            
            // Create and download file
            const blob = new Blob([csvContent], { type: 'text/csv' });
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = `orders_${new Date().toISOString().split('T')[0]}.csv`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            window.URL.revokeObjectURL(url);
            
            toast({
              title: "Export Successful",
              description: "Orders have been exported to CSV file."
            });
          }}
        >
          <Download className="mr-2 h-4 w-4" />
          Export Orders
        </Button>
      </div>

      <div className="flex gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search orders..."
            className="pl-10 bg-background border-border"
          />
        </div>
        <Button variant="outline" className="border-border">
          <Filter className="mr-2 h-4 w-4" />
          Filter
        </Button>
      </div>

      <div className="grid gap-4">
        {orders.map((order) => (
          <motion.div
            key={order.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="bg-card border-border animate-3d-hover">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <ShoppingBag className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-card-foreground">{order.id}</h3>
                      <p className="text-muted-foreground">{order.customer}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="font-semibold text-card-foreground">${order.total}</p>
                      <p className="text-sm text-muted-foreground">{order.items} items</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-card-foreground">{order.date}</p>
                      <p className="text-xs text-muted-foreground">{order.time}</p>
                    </div>
                    <Badge variant={getStatusVariant(order.status)} className="gap-1">
                      {getStatusIcon(order.status)}
                      {order.status}
                    </Badge>
                    <Button size="sm" variant="outline">
                      View Details
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

export default Orders;