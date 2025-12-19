"use client"

import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { PlusCircle } from "lucide-react"
import { assets } from "@/lib/data"

export function CreateTicketDialog() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" /> Create Ticket
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-2xl">
        <DialogHeader>
          <DialogTitle>Create New Ticket</DialogTitle>
          <DialogDescription>
            Describe your issue below. A support technician will assist you shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="title" className="text-right">Title</Label>
            <Input id="title" placeholder="e.g., Laptop won't turn on" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="priority" className="text-right">Priority</Label>
            <Select>
                <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a priority" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="low">Low</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="high">High</SelectItem>
                </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="asset" className="text-right">Linked Asset</Label>
            <Select>
                <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a linked asset (optional)" />
                </SelectTrigger>
                <SelectContent>
                    {assets.map(a => <SelectItem key={a.id} value={a.assetTag}>{a.name} ({a.assetTag})</SelectItem>)}
                </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <Label htmlFor="description" className="text-right pt-2">Description</Label>
            <Textarea id="description" placeholder="Please provide a detailed description of the issue..." className="col-span-3 min-h-[120px]" />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Submit Ticket</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
