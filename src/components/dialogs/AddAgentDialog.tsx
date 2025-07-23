import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Truck } from 'lucide-react';

interface AddAgentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddAgentDialog = ({ open, onOpenChange }: AddAgentDialogProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    vehicleType: '',
    licenseNumber: '',
    emergencyContact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding delivery agent:', formData);
    onOpenChange(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      vehicleType: '',
      licenseNumber: '',
      emergencyContact: ''
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto bg-white border-2 border-border shadow-xl rounded-lg">
        <DialogHeader className="border-b border-border pb-4">
          <DialogTitle className="flex items-center gap-2 text-foreground text-xl font-semibold">
            <Truck className="h-6 w-6 text-primary" />
            Add Delivery Agent
          </DialogTitle>
          <p className="text-muted-foreground">Add a new delivery agent to your team</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter full name"
              className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-foreground">Email *</Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="agent@healthycravez.com"
              className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone *</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 123-4567"
              className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="vehicleType" className="text-sm font-medium text-foreground">Vehicle Type *</Label>
            <Select onValueChange={(value) => setFormData({ ...formData, vehicleType: value })}>
              <SelectTrigger className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors">
                <SelectValue placeholder="Select vehicle" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-border shadow-xl rounded-md">
                <SelectItem value="bicycle">Bicycle</SelectItem>
                <SelectItem value="motorcycle">Motorcycle</SelectItem>
                <SelectItem value="car">Car</SelectItem>
                <SelectItem value="van">Van</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="licenseNumber" className="text-sm font-medium text-foreground">License Number</Label>
            <Input
              id="licenseNumber"
              value={formData.licenseNumber}
              onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
              placeholder="Enter license number"
              className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="emergencyContact" className="text-sm font-medium text-foreground">Emergency Contact</Label>
            <Input
              id="emergencyContact"
              value={formData.emergencyContact}
              onChange={(e) => setFormData({ ...formData, emergencyContact: e.target.value })}
              placeholder="Emergency contact number"
              className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
          
          <div className="flex justify-end gap-3 pt-6 border-t border-border">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-2 border-border">
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
              Add Agent
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddAgentDialog;