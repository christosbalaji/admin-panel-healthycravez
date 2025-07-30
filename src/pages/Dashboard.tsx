import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  Package, 
  Users, 
  ShoppingCart, 
  DollarSign,
  Activity,
  Clock
} from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { mockAnalyticsByStore, mockOrdersByStore } from '@/data/mockData';

const Dashboard = () => {
  const { currentStore } = useAuth();
  
  // Get store-specific data
  const storeAnalytics = currentStore ? mockAnalyticsByStore[currentStore.id] : null;
  const storeOrders = currentStore ? mockOrdersByStore[currentStore.id] || [] : [];

  const kpiData = storeAnalytics ? [
    {
      title: 'Daily Sales',
      value: `₹${storeAnalytics.dailySales.toLocaleString()}`,
      change: '+15.2% from yesterday',
      icon: DollarSign,
      trend: 'up',
      color: 'text-success'
    },
    {
      title: 'Total Orders',
      value: storeAnalytics.totalOrders.toString(),
      change: '+8% from last week',
      icon: ShoppingCart,
      trend: 'up',
      color: 'text-primary'
    },
    {
      title: 'Top Selling Meal',
      value: storeAnalytics.topSellingMeal,
      change: 'Most popular today',
      icon: Package,
      trend: 'up',
      color: 'text-warning'
    },
    {
      title: 'Avg Order Value',
      value: `₹${storeAnalytics.avgOrderValue}`,
      change: '+5.2% from last month',
      icon: Users,
      trend: 'up',
      color: 'text-success'
    }
  ] : [];

  const recentOrders = storeOrders.slice(0, 4).map(order => ({
    id: order.id,
    customer: order.customer,
    amount: `₹${order.amount}`,
    status: order.status.charAt(0).toUpperCase() + order.status.slice(1),
    time: `${order.time} ${order.date}`
  }));

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 15
      }
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Delivered': return 'text-success bg-success/10';
      case 'Processing': return 'text-warning bg-warning/10';
      case 'Shipped': return 'text-primary bg-primary/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="p-6 space-y-6"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="mb-8">
        <h1 className="text-3xl font-bold text-gradient mb-2">
          Welcome back, {currentStore?.manager}! 👋
        </h1>
        <p className="text-muted-foreground">
          Here's what's happening at {currentStore?.name} today.
        </p>
      </motion.div>

      {/* KPI Cards */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {kpiData.map((kpi, index) => (
          <motion.div
            key={kpi.title}
            variants={itemVariants}
            whileHover={{ 
              scale: 1.02,
              rotateY: 5,
              rotateX: 5
            }}
            transition={{ type: "spring", damping: 15 }}
            style={{ transformStyle: 'preserve-3d' }}
          >
            <Card className="glass-card border-white/10 hover:shadow-3d transition-all duration-300 animate-3d-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {kpi.title}
                </CardTitle>
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`p-2 rounded-lg bg-gradient-to-br from-white/10 to-white/5 ${kpi.color}`}
                >
                  <kpi.icon className="h-4 w-4" />
                </motion.div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold mb-1">
                  {kpi.value}
                </div>
                <div className="flex items-center text-xs">
                  {kpi.trend === 'up' ? (
                    <TrendingUp className="h-3 w-3 text-success mr-1" />
                  ) : (
                    <TrendingDown className="h-3 w-3 text-destructive mr-1" />
                  )}
                  <span className={kpi.trend === 'up' ? 'text-success' : 'text-destructive'}>
                    {kpi.change}
                  </span>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Orders */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <span>Recent Orders</span>
              </CardTitle>
              <CardDescription>
                Latest customer orders from your stores
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {recentOrders.map((order, index) => (
                <motion.div
                  key={order.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 5, backgroundColor: 'hsl(var(--background-secondary))' }}
                  className="flex items-center justify-between p-3 rounded-lg transition-all duration-200 cursor-pointer"
                >
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{order.customer}</span>
                      <span className="font-bold text-primary">{order.amount}</span>
                    </div>
                    <div className="flex items-center justify-between mt-1">
                      <span className="text-sm text-muted-foreground">{order.id}</span>
                      <div className="flex items-center space-x-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor(order.status)}`}>
                          {order.status}
                        </span>
                        <span className="text-xs text-muted-foreground flex items-center">
                          <Clock className="h-3 w-3 mr-1" />
                          {order.time}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>

        {/* Quick Stats */}
        <motion.div variants={itemVariants}>
          <Card className="glass-card border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <TrendingUp className="h-5 w-5 text-success" />
                <span>Performance Today</span>
              </CardTitle>
              <CardDescription>
                Key metrics for today's performance
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {[
                { label: 'Orders Completed', value: '89', total: '120', percentage: 74 },
                { label: 'Revenue Target', value: '$12,450', total: '$15,000', percentage: 83 },
                { label: 'Customer Satisfaction', value: '4.8', total: '5.0', percentage: 96 },
                { label: 'Delivery Time Avg', value: '23 min', total: '30 min', percentage: 77 }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="space-y-2"
                >
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">{stat.label}</span>
                    <span className="font-medium">{stat.value} / {stat.total}</span>
                  </div>
                  <div className="relative h-2 bg-background-secondary rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${stat.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.2 }}
                      className="h-full bg-gradient-primary rounded-full"
                    />
                  </div>
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Dashboard;