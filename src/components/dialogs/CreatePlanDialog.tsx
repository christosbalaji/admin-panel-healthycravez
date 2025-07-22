import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from 'lucide-react';

interface CreatePlanDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CreatePlanDialog = ({ open, onOpenChange }: CreatePlanDialogProps) => {
  const [formData, setFormData] = useState({
    planName: '',
    price: '',
    billingCycle: '',
    description: '',
    features: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Creating subscription plan:', formData);
    onOpenChange(false);
    setFormData({
      planName: '',
      price: '',
      billingCycle: '',
      description: '',
      features: ''
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl bg-white border-2 border-border shadow-xl rounded-lg">
        <DialogHeader className="border-b border-border pb-4">
          <DialogTitle className="flex items-center gap-2 text-foreground text-xl font-semibold">
            <Calendar className="h-6 w-6 text-primary" />
            Add Subscription Plan
          </DialogTitle>
          <p className="text-muted-foreground">Create a new subscription plan for your customers</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="planName" className="text-sm font-medium text-foreground">Plan Name *</Label>
              <Input
                id="planName"
                value={formData.planName}
                onChange={(e) => setFormData({ ...formData, planName: e.target.value })}
                placeholder="e.g., Healthy Options"
                className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="price" className="text-sm font-medium text-foreground">Price *</Label>
              <Input
                id="price"
                type="number"
                step="0.01"
                value={formData.price}
                onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                placeholder="29.99"
                className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="billingCycle" className="text-sm font-medium text-foreground">Billing Cycle</Label>
            <Select onValueChange={(value) => setFormData({ ...formData, billingCycle: value })}>
              <SelectTrigger className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors">
                <SelectValue placeholder="Select billing cycle" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-border shadow-xl rounded-md">
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="monthly">Monthly</SelectItem>
                <SelectItem value="quarterly">Quarterly</SelectItem>
                <SelectItem value="yearly">Yearly</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="description" className="text-sm font-medium text-foreground">Description *</Label>
            <Textarea
              id="description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              placeholder="Describe what this plan offers..."
              className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              rows={3}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="features" className="text-sm font-medium text-foreground">Features (one per line)</Label>
            <Textarea
              id="features"
              value={formData.features}
              onChange={(e) => setFormData({ ...formData, features: e.target.value })}
              placeholder="e.g.,&#10;3 meals per week&#10;Basic nutrition tracking&#10;Email support"
              className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              rows={4}
            />
          </div>
          
          <div className="flex justify-end gap-3 pt-6 border-t border-border">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-2 border-border">
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
              Create Plan
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePlanDialog;