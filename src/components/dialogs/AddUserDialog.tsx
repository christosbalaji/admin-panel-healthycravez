import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { UserPlus } from 'lucide-react';

interface AddUserDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddUserDialog = ({ open, onOpenChange }: AddUserDialogProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    role: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Adding user:', formData);
    onOpenChange(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      role: '',
      password: ''
    });
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg bg-white border-2 border-border shadow-xl rounded-lg">
        <DialogHeader className="border-b border-border pb-4">
          <DialogTitle className="flex items-center gap-2 text-foreground text-xl font-semibold">
            <UserPlus className="h-6 w-6 text-primary" />
            Add New User
          </DialogTitle>
          <p className="text-muted-foreground">Create a new user account with appropriate access level</p>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6 pt-4">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium text-foreground">Full Name *</Label>
            <Input
              id="fullName"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
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
              placeholder="user@example.com"
              className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone" className="text-sm font-medium text-foreground">Phone</Label>
            <Input
              id="phone"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 123-4567"
              className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="role" className="text-sm font-medium text-foreground">Role *</Label>
            <Select onValueChange={(value) => setFormData({ ...formData, role: value })}>
              <SelectTrigger className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors">
                <SelectValue placeholder="Select role" />
              </SelectTrigger>
              <SelectContent className="bg-white border-2 border-border shadow-xl rounded-md">
                <SelectItem value="customer">Customer</SelectItem>
                <SelectItem value="delivery">Delivery Agent</SelectItem>
                <SelectItem value="store_manager">Store Manager</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-foreground">Password *</Label>
            <Input
              id="password"
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Enter password"
              className="bg-white border-2 border-border rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-colors"
              required
            />
          </div>
          
          <div className="flex justify-end gap-3 pt-6 border-t border-border">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="border-2 border-border">
              Cancel
            </Button>
            <Button type="submit" className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-md">
              Add User
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddUserDialog;