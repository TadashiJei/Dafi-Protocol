'use client'

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Icons } from '@/components/icons'

interface MetaMaskInstructionsProps {
  isOpen: boolean
  onClose: () => void
}

export function MetaMaskInstructions({ isOpen, onClose }: MetaMaskInstructionsProps) {
  const handleInstallClick = () => {
    window.open('https://metamask.io/download/', '_blank')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-black/90 backdrop-blur-xl text-white border-gray-800">
        <DialogHeader>
          <div className="flex items-center gap-2">
            <Icons.metamask className="h-8 w-8" />
            <DialogTitle>MetaMask Required</DialogTitle>
          </div>
          <DialogDescription className="text-gray-400">
            MetaMask is not installed in your browser. Follow these steps to get started:
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium text-white">1. Install MetaMask</h4>
            <p className="text-sm text-gray-400">
              Install the MetaMask browser extension from the official website.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-white">2. Create or Import a Wallet</h4>
            <p className="text-sm text-gray-400">
              If you&apos;re new to MetaMask, create a new wallet and securely store your recovery phrase.
              If you have an existing wallet, you can import it using your recovery phrase.
            </p>
          </div>
          <div className="space-y-2">
            <h4 className="font-medium text-white">3. Connect to DAFI</h4>
            <p className="text-sm text-gray-400">
              Once MetaMask is set up, return to this page and click the MetaMask button again to connect.
            </p>
          </div>
        </div>
        <DialogFooter>
          <Button
            onClick={handleInstallClick}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600"
          >
            Install MetaMask
          </Button>
          <Button
            variant="outline"
            onClick={onClose}
            className="w-full border-gray-700 text-gray-300 hover:text-white"
          >
            I&apos;ll do this later
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
