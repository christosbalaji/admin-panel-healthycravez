import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Store } from 'lucide-react';

interface AddStoreDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddStoreDialog = ({ open, onOpenChange }: AddStoreDialogProps) => {
  const [formData, setFormData] = useState({
    name: '',
    manager: '',
    address: '',
    phone: '',
    email: '',
    mondayHours: '',
    tuesdayHours: '',
    wednesdayHours: '',
    thursdayHours: '',
    fridayHours: '',
    saturdayHours: '',
    sundayHours: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding store:', formData);
    onOpenChange(false);
    setFormData({
      name: '',
      manager: '',
      address: '',
      phone: '',
      email: '',
      mondayHours: '',
      tuesdayHours: '',
      wednesdayHours: '',
      thursdayHours: '',
      fridayHours: '',
      saturdayHours: '',
      sundayHours: ''
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto bg-white border-2 border-border shadow-xl rounded-lg">
        <DialogHeader className="border-b border-border pb-4">
          <DialogTitle className="flex items-center gap-2 text-foreground text-xl font-semibold">
            <Store className="h-6 w-6 text-primary" />
            Add New Store
          </DialogTitle>
          <p className="text-muted-foreground">Add a new store location to your network</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground border-b border-border pb-2">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="storeName" className="text-sm font-medium text-foreground">Store Name *</Label>
                <Input
                  id="storeName"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="storeManager" className="text-sm font-medium text-foreground">Store Manager</Label>
                <Input
                  id="storeManager"
                  value={formData.manager}
                  onChange={(e) => setFormData({ ...formData, manager: e.target.value })}
                  placeholder="Manager name"
                  className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address" className="text-sm font-medium text-foreground">Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Enter store address"
                className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                rows={2}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-foreground">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="store@healthycravez.com"
                  className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground border-b border-border pb-2">Operating Hours</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { day: 'Monday', key: 'mondayHours' },
                { day: 'Tuesday', key: 'tuesdayHours' },
                { day: 'Wednesday', key: 'wednesdayHours' },
                { day: 'Thursday', key: 'thursdayHours' },
                { day: 'Friday', key: 'fridayHours' },
                { day: 'Saturday', key: 'saturdayHours' },
                { day: 'Sunday', key: 'sundayHours' }
              ].map(({ day, key }) => (
                <div key={day} className="space-y-2">
                  <Label htmlFor={key} className="text-sm font-medium text-foreground">{day}</Label>
                  <Input
                    id={key}
                    value={formData[key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    placeholder="9:00 AM - 10:00 PM"
                    className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end gap-3 pt-6 border-t border-border">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-2 border-border">
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
              Add Store
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStoreDialog;