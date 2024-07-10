import { toast } from '@hooks/use-toast';
import { Button } from '@ui/button';
import * as DW from '@ui/drawer-dialog';
import { Input } from '@ui/input';
import { Label } from '@ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@ui/select';
import { Textarea } from '@ui/textarea';
import { useState } from 'react';

export function ReportIssue() {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsOpen = () => setIsOpen(!isOpen);
  const [form, setForm] = useState({
    subject: '',
    description: '',
  });
  return (
    <DW.DrawerDialog open={isOpen} setOpen={setIsOpen}>
      <DW.DrawerDialogTrigger>
        <Button variant='ghost' className='mr-auto px-2'>Report an issue</Button>
      </DW.DrawerDialogTrigger>
      <DW.DrawerDialogContent>
        <DW.DrawerDialogTitle>Report an issue</DW.DrawerDialogTitle>
        <p className='text-sm text-muted-foreground'>
          What area are you having problems with?
        </p>
        <div className='grid gap-6 px-0'>
          <div className='grid grid-cols-2 gap-4'>
            <div className='grid gap-2'>
              <Label htmlFor='area'>Area</Label>
              <Select defaultValue='billing'>
                <SelectTrigger id='area'>
                  <SelectValue placeholder='Select' />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='team'>Team</SelectItem>
                  <SelectItem value='billing'>Billing</SelectItem>
                  <SelectItem value='account'>Account</SelectItem>
                  <SelectItem value='deployments'>Deployments</SelectItem>
                  <SelectItem value='support'>Support</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className='grid gap-2'>
              <Label htmlFor='security-level'>Security Level</Label>
              <Select defaultValue='2'>
                <SelectTrigger
                  id='security-level'
                  className='line-clamp-1 flex w-[160px] items-center truncate'
                >
                  <SelectValue
                    placeholder='Select level'
                    className='flex-shrink-0'
                  />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='1'>Severity 1 (Highest)</SelectItem>
                  <SelectItem value='2'>Severity 2</SelectItem>
                  <SelectItem value='3'>Severity 3</SelectItem>
                  <SelectItem value='4'>Severity 4 (Lowest)</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='subject'>Subject</Label>
            <Input id='subject' name='subject' placeholder='I need help with...'  value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} />
          </div>
          <div className='grid gap-2'>
            <Label htmlFor='description'>Description</Label>
            <Textarea
              id='description'
              name='description'
              placeholder='Please include all information relevant to your issue.'
              value={form.description}
              onChange={(e) => setForm({ ...form, description: e.target.value })}
            />
          </div>
        </div>
        <DW.DrawerDialogFooter>
          <Button variant='ghost' onClick={handleIsOpen}>
            Cancel
          </Button>
          <Button
            onClick={() => {
              if (form.subject && form.description) {
                toast({
                  title: 'Issue reported',
                  description: 'We will get back to you as soon as possible.',
                });
                setIsOpen(false);
              } else {
                toast({
                  title: 'Missing information',
                  description: 'Please fill out all fields.',
                  variant: 'destructive',
                });
              }
            }}
          >
            Submit
          </Button>
        </DW.DrawerDialogFooter>
      </DW.DrawerDialogContent>
    </DW.DrawerDialog>
  );
}
