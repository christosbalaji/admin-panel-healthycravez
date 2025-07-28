import { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Search, Edit, Trash2, ChefHat } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AddMealDialog from '@/components/dialogs/AddMealDialog';

const Meals = () => {
  const [showAddDialog, setShowAddDialog] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const meals = [
    {
      id: 1,
      image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=80&h=80&fit=crop&crop=center',
      name: 'Grilled Chicken Salad',
      category: 'High Protein',
      calories: 320,
      price: 299,
      status: 'Active'
    },
    {
      id: 2,
      image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=80&h=80&fit=crop&crop=center',
      name: 'Quinoa Buddha Bowl',
      category: 'Vegan',
      calories: 380,
      price: 349,
      status: 'Active'
    },
    {
      id: 3,
      image: 'https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=80&h=80&fit=crop&crop=center',
      name: 'Green Detox Smoothie',
      category: 'Beverages',
      calories: 150,
      price: 199,
      status: 'Inactive'
    },
    {
      id: 4,
      image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=80&h=80&fit=crop&crop=center',
      name: 'Mediterranean Wrap',
      category: 'Low Carb',
      calories: 290,
      price: 279,
      status: 'Active'
    },
  ];

  const filteredMeals = meals.filter(meal =>
    meal.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    meal.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    return status === 'Active' 
      ? 'bg-green-100 text-green-800 border-green-200' 
      : 'bg-red-100 text-red-800 border-red-200';
  };

  const getCategoryColor = (category: string) => {
    const colors = {
      'Vegan': 'bg-emerald-100 text-emerald-800 border-emerald-200',
      'High Protein': 'bg-blue-100 text-blue-800 border-blue-200',
      'Low Carb': 'bg-purple-100 text-purple-800 border-purple-200',
      'Beverages': 'bg-orange-100 text-orange-800 border-orange-200',
    };
    return colors[category as keyof typeof colors] || 'bg-gray-100 text-gray-800 border-gray-200';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 md:p-6 space-y-6"
    >
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-[#FAAB1B]/10 rounded-lg">
            <ChefHat className="h-6 w-6 text-[#FAAB1B]" />
          </div>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground">Manage Meals</h1>
        </div>
        <Button 
          onClick={() => setShowAddDialog(true)}
          className="bg-[#FAAB1B] hover:bg-[#E99A16] text-white shadow-lg"
        >
          <Plus className="mr-2 h-4 w-4" />
          Add New Meal
        </Button>
      </div>

      {/* Top Bar */}
      <Card className="bg-card border-border shadow-sm">
        <CardContent className="p-4">
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <div className="relative flex-1 w-full">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search meals by name or category..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 bg-background border-border"
              />
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Meals Table */}
      <Card className="bg-card border-border shadow-sm">
        <CardHeader>
          <CardTitle className="text-lg font-semibold text-card-foreground">
            All Meals ({filteredMeals.length})
          </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow className="border-border">
                  <TableHead className="w-20">Image</TableHead>
                  <TableHead>Name</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Calories</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead className="text-right">Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredMeals.map((meal) => (
                  <motion.tr
                    key={meal.id}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                    className="border-border hover:bg-muted/50"
                  >
                    <TableCell>
                      <img
                        src={meal.image}
                        alt={meal.name}
                        className="w-12 h-12 rounded-lg object-cover shadow-sm"
                      />
                    </TableCell>
                    <TableCell>
                      <div className="font-medium text-card-foreground">{meal.name}</div>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getCategoryColor(meal.category)} border`}>
                        {meal.category}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <span className="text-muted-foreground">{meal.calories} cal</span>
                    </TableCell>
                    <TableCell>
                      <span className="font-semibold text-card-foreground">₹{meal.price}</span>
                    </TableCell>
                    <TableCell>
                      <Badge className={`${getStatusColor(meal.status)} border`}>
                        {meal.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0 border-border hover:bg-[#FAAB1B]/10 hover:border-[#FAAB1B]"
                        >
                          <Edit className="h-4 w-4 text-[#FAAB1B]" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="h-8 w-8 p-0 border-border hover:bg-red-50 hover:border-red-200"
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </Button>
                      </div>
                    </TableCell>
                  </motion.tr>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      <AddMealDialog 
        open={showAddDialog} 
        onOpenChange={setShowAddDialog} 
      />
    </motion.div>
  );
};

export default Meals;