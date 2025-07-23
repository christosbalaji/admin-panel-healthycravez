import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Package } from 'lucide-react';

interface AddItemDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddItemDialog = ({ open, onOpenChange }: AddItemDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    stock: '',
    description: '',
    tags: '',
    calories: '',
    protein: '',
    carbs: '',
    fat: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Adding item:', formData);
    onOpenChange(false);
    setFormData({
      name: '',
      category: '',
      price: '',
      stock: '',
      description: '',
      tags: '',
      calories: '',
      protein: '',
      carbs: '',
      fat: ''
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-2 border-border shadow-xl rounded-lg">
        <DialogHeader className="border-b border-border pb-4">
          <DialogTitle className="flex items-center gap-2 text-foreground text-xl font-semibold">
            <Package className="h-6 w-6 text-primary" />
            Add New Item
          </DialogTitle>
          <p className="text-muted-foreground">Add a new food item to your inventory</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium text-foreground">Item Name *</Label>
              <Input
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Enter item name"
                className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="category" className="text-sm font-medium text-foreground">Category *</Label>
              <Select onValueChange={(value) => setFormData({ ...formData, category: value })}>
                <SelectTrigger className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors">
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent className="bg-white border-2 border-border shadow-xl rounded-md">
                  <SelectItem value="salads">Salads</SelectItem>
                  <SelectItem value="bowls">Bowls</SelectItem>
                  <SelectItem value="wraps">Wraps</SelectItem>
                  <SelectItem value="beverages">Beverages</SelectItem>
                  <SelectItem value="desserts">Desserts</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="price" className="text-sm font-medium text-foreground">Price *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="0.00"
                className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="stock" className="text-sm font-medium text-foreground">Stock Quantity</Label>
              <Input
                id="stock"
                type="number"
                value={formData.stock}
                onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                placeholder="Enter stock quantity"
                className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-foreground">Description</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe the item..."
              className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="tags" className="text-sm font-medium text-foreground">Tags (comma separated)</Label>
            <Input
              id="tags"
              value={formData.tags}
              onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
              placeholder="healthy, vegan, organic, gluten-free"
              className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
          
          <div className="space-y-3">
            <h4 className="text-lg font-medium text-foreground">Nutritional Information</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="space-y-2">
                <Label htmlFor="calories" className="text-sm font-medium text-foreground">Calories</Label>
                <Input
                  id="calories"
                  type="number"
                  value={formData.calories}
                  onChange={(e) => setFormData({ ...formData, calories: e.target.value })}
                  className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="protein" className="text-sm font-medium text-foreground">Protein (g)</Label>
                <Input
                  id="protein"
                  type="number"
                  step="0.1"
                  value={formData.protein}
                  onChange={(e) => setFormData({ ...formData, protein: e.target.value })}
                  className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="carbs" className="text-sm font-medium text-foreground">Carbs (g)</Label>
                <Input
                  id="carbs"
                  type="number"
                  step="0.1"
                  value={formData.carbs}
                  onChange={(e) => setFormData({ ...formData, carbs: e.target.value })}
                  className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="fat" className="text-sm font-medium text-foreground">Fat (g)</Label>
                <Input
                  id="fat"
                  type="number"
                  step="0.1"
                  value={formData.fat}
                  onChange={(e) => setFormData({ ...formData, fat: e.target.value })}
                  className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-6 border-t border-border">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-2 border-border">
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
              Add Item
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddItemDialog;