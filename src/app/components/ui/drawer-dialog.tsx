import * as React from 'react'

import { cn } from '@shared/utils'
import { useMediaQuery } from '@hooks/use-media-query'
import * as DL from '@ui/dialog'
import * as DW from '@ui/drawer'
type DrawerDialogProps = Props & {
  open: boolean
  setOpen: (open: boolean) => void
}

const DrawerDialog: React.FC<DrawerDialogProps> = ({
  children,
  open,
  setOpen
}): JSX.Element => {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  if (isDesktop) {
    return (
      <DL.Dialog open={open} onOpenChange={setOpen}>
        <>{children}</>
      </DL.Dialog>
    )
  }

  return (
    <DW.Drawer open={open} onOpenChange={setOpen}>
      <>{children}</>
    </DW.Drawer>
  )
}

DrawerDialog.displayName = 'DrawerDialog'


const DrawerDialogTrigger: React.FC<Props> = ({ children, className }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <DL.DialogTrigger asChild className={cn(className)}>
        {children}
      </DL.DialogTrigger>
    )
  }

  return (
    <DW.DrawerTrigger asChild className={cn(className)}>
      {children}
    </DW.DrawerTrigger>
  )
}

DrawerDialogTrigger.displayName = 'DrawerDialogTrigger'

const DrawerDialogTitle: React.FC<Props> = ({ children, className }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <DL.DialogTitle className={cn('text-primary', className)}>{children}</DL.DialogTitle>
    )
  }

  return (
    <DW.DrawerTitle className={cn('p-4', className)}>{children}</DW.DrawerTitle>
  )
}

DrawerDialogTitle.displayName = 'DrawerDialogTitle'

const DrawerDialogDescription: React.FC<Props> = ({ children, className }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <DL.DialogDescription className={cn('text-black dark:text-white', className)}>{children}</DL.DialogDescription>
    )
  }

  return (
    <DW.DrawerDescription className={cn('text-black dark:text-white', className)}>{children}</DW.DrawerDescription>
  )
}

DrawerDialogDescription.displayName = 'DrawerDialogDescription'

const DrawerDialogContent: React.FC<Props> = ({ children, className }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <DL.DialogContent className={cn('text-black dark:text-white',className)} aria-description='responsive dialog'>{children}</DL.DialogContent>
    )
  }

  return (
    <DW.DrawerContent className={cn('p-4 text-black dark:text-white', className)} aria-description='responsive dialog'>
      {children}
    </DW.DrawerContent>
  )
}

DrawerDialogContent.displayName = 'DrawerDialogContent'


const DrawerDialogFooter: React.FC<Props> = ({ children, className }) => {
  const isDesktop = useMediaQuery('(min-width: 768px)')

  if (isDesktop) {
    return (
      <DL.DialogFooter aria-describedby='responsive dialog footer' className={cn('text-black dark:text-white', className)}>{children}</DL.DialogFooter>
    )
  }

  return <DW.DrawerFooter aria-description='responsive dialog footer' className={cn('text-black dark:text-white', className)}>{children}</DW.DrawerFooter>
}

DrawerDialogFooter.displayName = 'DrawerDialogFooter'

export {
  DrawerDialog,
  DrawerDialogContent,
  DrawerDialogFooter,
  DrawerDialogTrigger,
  DrawerDialogTitle,
  DrawerDialogDescription
}
