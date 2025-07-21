import { motion } from 'framer-motion';
import { BarChart3, TrendingUp, DollarSign, Users, ShoppingBag, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Analytics = () => {
  const stats = [
    {
      title: 'Total Revenue',
      value: '$24,567',
      change: '+12.5%',
      icon: DollarSign,
      trend: 'up'
    },
    {
      title: 'Active Users',
      value: '1,234',
      change: '+8.2%',
      icon: Users,
      trend: 'up'
    },
    {
      title: 'Orders Today',
      value: '89',
      change: '-2.4%',
      icon: ShoppingBag,
      trend: 'down'
    },
    {
      title: 'Subscriptions',
      value: '456',
      change: '+15.8%',
      icon: Calendar,
      trend: 'up'
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
        <h1 className="text-3xl font-bold text-foreground">Analytics Dashboard</h1>
        <div className="flex gap-2">
          <select className="px-4 py-2 border border-border rounded-md bg-background text-foreground">
            <option>Last 7 days</option>
            <option>Last 30 days</option>
            <option>Last 90 days</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card className="bg-card border-border animate-3d-hover">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-muted-foreground">
                  {stat.title}
                </CardTitle>
                <stat.icon className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-card-foreground">{stat.value}</div>
                <p className={`text-xs ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'} flex items-center gap-1`}>
                  <TrendingUp className="h-3 w-3" />
                  {stat.change} from last period
                </p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center gap-2">
              <BarChart3 className="h-5 w-5" />
              Sales Overview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <BarChart3 className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>Chart visualization would go here</p>
                <p className="text-sm">Sales data for the selected period</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardHeader>
            <CardTitle className="text-card-foreground flex items-center gap-2">
              <Users className="h-5 w-5" />
              User Activity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-64 flex items-center justify-center text-muted-foreground">
              <div className="text-center">
                <Users className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p>User activity chart would go here</p>
                <p className="text-sm">Daily active users and engagement metrics</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="bg-card border-border">
        <CardHeader>
          <CardTitle className="text-card-foreground">Recent Performance</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-background rounded-lg">
              <div>
                <p className="font-medium text-card-foreground">Best Selling Item</p>
                <p className="text-sm text-muted-foreground">Grilled Chicken Salad</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-card-foreground">156 orders</p>
                <p className="text-sm text-green-600">+23% this week</p>
              </div>
            </div>
            <div className="flex items-center justify-between p-4 bg-background rounded-lg">
              <div>
                <p className="font-medium text-card-foreground">Peak Hours</p>
                <p className="text-sm text-muted-foreground">12:00 PM - 2:00 PM</p>
              </div>
              <div className="text-right">
                <p className="font-semibold text-card-foreground">45% of daily orders</p>
                <p className="text-sm text-muted-foreground">Lunch rush</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default Analytics;