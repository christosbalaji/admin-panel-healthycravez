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
      <DialogContent className="max-w-4xl bg-white">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-foreground">
            <Store className="h-5 w-5 text-primary" />
            Add New Store
          </DialogTitle>
          <p className="text-muted-foreground">Add a new store location to your network</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Basic Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="storeName">Store Name *</Label>
                <Input
                  id="storeName"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="storeManager">Store Manager</Label>
                <Input
                  id="storeManager"
                  value={formData.manager}
                  onChange={(e) => setFormData({ ...formData, manager: e.target.value })}
                  placeholder="Manager name"
                  className="bg-white"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="address">Address *</Label>
              <Textarea
                id="address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                placeholder="Enter store address"
                className="bg-white"
                rows={2}
                required
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="phone">Phone *</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(555) 123-4567"
                  className="bg-white"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="store@healthycravez.com"
                  className="bg-white"
                />
              </div>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-foreground">Operating Hours</h3>
            
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
                  <Label htmlFor={key}>{day}</Label>
                  <Input
                    id={key}
                    value={formData[key as keyof typeof formData]}
                    onChange={(e) => setFormData({ ...formData, [key]: e.target.value })}
                    placeholder="9:00 AM - 10:00 PM"
                    className="bg-white"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-end gap-2 pt-4">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Add Store
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddStoreDialog;