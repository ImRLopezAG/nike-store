import { cn } from '@shared/utils'
type IconProps = React.SVGProps<SVGSVGElement>

export const GithubIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props} className={cn('size-6', className)}  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg>
)

export const GoogleIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props} className={cn('size-6', className)}  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a9.96 9.96 0 0 1 6.29 2.226a1 1 0 0 1 .04 1.52l-1.51 1.362a1 1 0 0 1 -1.265 .06a6 6 0 1 0 2.103 6.836l.001 -.004h-3.66a1 1 0 0 1 -.992 -.883l-.007 -.117v-2a1 1 0 0 1 1 -1h6.945a1 1 0 0 1 .994 .89c.04 .367 .061 .737 .061 1.11c0 5.523 -4.477 10 -10 10s-10 -4.477 -10 -10s4.477 -10 10 -10z" /></svg>
)

export const AppleIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props}  className={cn('size-6', className)}  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z" /><path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2" /></svg>
)

export const PaypalIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props}  className={cn('size-6', className)}  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12.5 2c3.113 0 5.309 1.785 5.863 4.565c1.725 1.185 2.637 3.152 2.637 5.435c0 2.933 -2.748 5.384 -5.783 5.496l-.217 .004h-1.754l-.466 2.8a1.998 1.998 0 0 1 -1.823 1.597l-.157 .003h-2.68a1.5 1.5 0 0 1 -1.182 -.54a1.495 1.495 0 0 1 -.348 -1.07l.042 -.29h-1.632c-1.004 0 -1.914 -.864 -1.994 -1.857l-.006 -.143l.01 -.141l1.993 -13.954l.003 -.048c.072 -.894 .815 -1.682 1.695 -1.832l.156 -.02l.143 -.005h5.5zm5.812 7.35l-.024 .087c-.706 2.403 -3.072 4.436 -5.555 4.557l-.233 .006h-2.503v.05l-.025 .183l-1.2 5a1.007 1.007 0 0 1 -.019 .07l-.088 .597h2.154l.595 -3.564a1 1 0 0 1 .865 -.829l.121 -.007h2.6c2.073 0 4 -1.67 4 -3.5c0 -1.022 -.236 -1.924 -.688 -2.65z" /></svg>
)

export const CreditCardIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props}  className={cn('size-6', className)}  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z" /><path d="M3 10l18 0" /><path d="M7 15l.01 0" /><path d="M11 15l2 0" /></svg>
)

export const StarIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props}  className={cn('size-6', className)}  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M8.243 7.34l-6.38 .925l-.113 .023a1 1 0 0 0 -.44 1.684l4.622 4.499l-1.09 6.355l-.013 .11a1 1 0 0 0 1.464 .944l5.706 -3l5.693 3l.1 .046a1 1 0 0 0 1.352 -1.1l-1.091 -6.355l4.624 -4.5l.078 -.085a1 1 0 0 0 -.633 -1.62l-6.38 -.926l-2.852 -5.78a1 1 0 0 0 -1.794 0l-2.853 5.78z" /></svg>
)

export const HalfStarIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props}  className={cn('size-6', className)}  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 1a.993 .993 0 0 1 .823 .443l.067 .116l2.852 5.781l6.38 .925c.741 .108 1.08 .94 .703 1.526l-.07 .095l-.078 .086l-4.624 4.499l1.09 6.355a1.001 1.001 0 0 1 -1.249 1.135l-.101 -.035l-.101 -.046l-5.693 -3l-5.706 3c-.105 .055 -.212 .09 -.32 .106l-.106 .01a1.003 1.003 0 0 1 -1.038 -1.06l.013 -.11l1.09 -6.355l-4.623 -4.5a1.001 1.001 0 0 1 .328 -1.647l.113 -.036l.114 -.023l6.379 -.925l2.853 -5.78a.968 .968 0 0 1 .904 -.56zm0 3.274v12.476a1 1 0 0 1 .239 .029l.115 .036l.112 .05l4.363 2.299l-.836 -4.873a1 1 0 0 1 .136 -.696l.07 -.099l.082 -.09l3.546 -3.453l-4.891 -.708a1 1 0 0 1 -.62 -.344l-.073 -.097l-.06 -.106l-2.183 -4.424z" /></svg>
)

export const TagIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props}  className={cn('size-6', className)}  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.172 5a3 3 0 0 1 2.121 .879l5.71 5.71a3.41 3.41 0 0 1 0 4.822l-3.592 3.592a3.41 3.41 0 0 1 -4.822 0l-5.71 -5.71a3 3 0 0 1 -.879 -2.121v-4.172a3 3 0 0 1 3 -3zm-2.172 4h-.01a1 1 0 1 0 .01 2a1 1 0 0 0 0 -2" /><path d="M14.293 5.293a1 1 0 0 1 1.414 0l4.593 4.592a5.82 5.82 0 0 1 0 8.23l-1.592 1.592a1 1 0 0 1 -1.414 -1.414l1.592 -1.592a3.82 3.82 0 0 0 0 -5.402l-4.592 -4.592a1 1 0 0 1 0 -1.414" /></svg>
)

export const CartIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props} className={cn('size-6', className)}  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"  ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" /></svg>
)

export const ChevronLeftIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props}  className={cn('size-6', className)}  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2a10 10 0 0 1 .324 19.995l-.324 .005l-.324 -.005a10 10 0 0 1 .324 -19.995zm.707 5.293a1 1 0 0 0 -1.414 0l-4 4a1.048 1.048 0 0 0 -.083 .094l-.064 .092l-.052 .098l-.044 .11l-.03 .112l-.017 .126l-.003 .075l.004 .09l.007 .058l.025 .118l.035 .105l.054 .113l.043 .07l.071 .095l.054 .058l4 4l.094 .083a1 1 0 0 0 1.32 -1.497l-2.292 -2.293h5.585l.117 -.007a1 1 0 0 0 -.117 -1.993h-5.586l2.293 -2.293l.083 -.094a1 1 0 0 0 -.083 -1.32z" /></svg>
)

export const ChevronRightIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props}  className={cn('size-6', className)}  width="24"  height="24"  viewBox="0 0 24 24"  fill="currentColor"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 2l.324 .005a10 10 0 1 1 -.648 0l.324 -.005zm.613 5.21a1 1 0 0 0 -1.32 1.497l2.291 2.293h-5.584l-.117 .007a1 1 0 0 0 .117 1.993h5.584l-2.291 2.293l-.083 .094a1 1 0 0 0 1.497 1.32l4 -4l.073 -.082l.064 -.089l.062 -.113l.044 -.11l.03 -.112l.017 -.126l.003 -.075l-.007 -.118l-.029 -.148l-.035 -.105l-.054 -.113l-.071 -.111a1.008 1.008 0 0 0 -.097 -.112l-4 -4z" /></svg>
)

export const TrashIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props} className={cn('size-6', className)} width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M4 7l16 0" /><path d="M10 11l0 6" /><path d="M14 11l0 6" /><path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" /><path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" /></svg>
)

export const PlusIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props} className={cn('size-6', className)} width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" /><path d="M9 12h6" /><path d="M12 9v6" /></svg>
)

export const MinusIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props} className={cn('size-6', className)} width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round" ><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M9 12l6 0" /></svg>
)

export const CloseIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props}  className={cn('size-6', className)}  width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M18 6l-12 12" /><path d="M6 6l12 12" /></svg>
)

export const InvoiceIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props} className={cn('size-6', className)} width="24"  height="24"  viewBox="0 0 24 24"  fill="none"  stroke="currentColor"  strokeWidth="2"  strokeLinecap="round"  strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M14 3v4a1 1 0 0 0 1 1h4" /><path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" /><path d="M9 7l1 0" /><path d="M9 13l6 0" /><path d="M13 17l2 0" /></svg>
)

export const VisaIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props} className={cn('size-6', className)}  viewBox="0 0 750 471"><g fill="none"><rect width="750" height="471" fill="#0E4595" rx="40"/><path fill="#FFF" d="m278 334 34-196h53l-33 196zm246-191c-10-4-27-9-48-9-52 0-89 27-90 65 0 28 27 44 47 53 21 10 28 16 28 25 0 13-17 19-32 19-22 0-33-3-50-11l-7-3-8 44c13 6 36 10 60 11 56 0 92-27 93-67 0-23-14-40-45-54-19-9-30-15-30-24 0-8 9-17 30-17 18 0 30 4 40 8l5 2 7-42m138-5h-42c-12 0-22 4-28 17l-79 179h56l11-29h69l6 29h50l-43-196Zm-66 127 21-55 8-19 3 17 12 57h-44Z"/><path fill="#fff" d="m46 138-1 5c21 5 40 12 57 21l47 170h56l84-196h-56l-52 134-6-27-1-3-18-87c-3-12-12-16-24-17H46z"/></g></svg>
)

export  const MasterCardIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props} className={cn('size-6', className)} viewBox="0 -139.5 750 750"><g fill="none"><rect width="750" height="471" fill="#000" rx="40"/><path fill="#FFF" d="M221 422v-25c0-10-6-16-15-16-5 0-11 2-14 7-3-4-7-7-14-7-4 0-9 2-12 6v-5h-7v40h7v-23c0-7 5-10 10-10 6 0 10 3 10 10v23h7v-23c0-7 5-10 10-10 6 0 9 3 9 10v23h9Zm129-40h-14v-12h-8v12h-8v7h8v19c0 9 3 15 13 15l11-3-2-7-8 2c-4 0-6-3-6-7v-19h14v-7Zm74-1c-4 0-8 2-11 6v-5h-8v40h8v-23c0-6 4-10 9-10h5l3-7-6-1Zm-111 4c-4-3-10-4-16-4-10 0-17 5-17 13 0 6 5 10 14 11l4 1c4 0 7 2 7 4 0 3-3 5-9 5-5 0-10-1-14-4l-4 6c6 4 13 5 17 5 12 0 18-5 18-13 0-7-5-10-14-11l-4-1c-3 0-7-1-7-4s4-5 8-5c5 0 10 2 13 3l4-6Zm120 17c0 12 8 21 20 21 6 0 10-2 15-5l-5-6c-3 2-6 3-10 3-7 0-12-5-12-13s5-13 12-13c4 0 7 1 10 4l5-6c-5-4-9-5-15-5-12-1-20 8-20 20Zm-56-21c-11 0-19 8-19 21 0 12 8 21 20 21 6 0 12-2 16-6l-4-6c-3 3-7 4-11 4-6 0-12-3-12-10h29v-3c0-13-8-21-19-21Zm0 8c6 0 10 3 10 9h-21c1-5 5-9 11-9Zm-107 13v-20h-8v5c-3-4-7-6-13-6-11 0-20 9-20 21s9 21 20 21c6 0 10-3 13-6v5h8v-20Zm-32 0c0-8 4-13 12-13s12 5 12 13-5 13-12 13c-8 0-12-6-12-13Zm306-21c-5 0-9 2-11 6v-5h-8v40h8v-23c0-6 3-10 9-10h5l3-7-6-1Zm-31 21v-20h-8v5c-3-4-7-6-13-6-11 0-19 9-19 21s8 21 19 21c6 0 10-3 13-6v5h8v-20Zm-32 0c0-8 5-13 13-13 7 0 12 5 12 13s-5 13-12 13c-8 0-13-6-13-13Zm112 0v-36h-8v21c-3-4-7-6-13-6-11 0-19 9-19 21s8 21 19 21c6 0 10-3 13-6v5h8v-20Zm-32 0c0-8 5-13 13-13 7 0 12 5 12 13s-5 13-12 13c-8 0-13-6-13-13Z"/><path fill="#FF5F00" d="M304 80h143v235H304z"/><path fill="#EB001B" d="M318 198c0-46 21-89 57-118a149 149 0 1 0 0 235c-36-29-57-72-57-117Z"/><path fill="#F79E1B" d="M616 198a149 149 0 0 1-241 117 149 149 0 0 0 0-235 149 149 0 0 1 241 118Z"/></g></svg>
)

export const AmericanExpressIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props} className={cn('size-6', className)} viewBox="0 -139.5 750 750"><g fill="none"><rect width="750" height="471" fill="#2557D6" rx="40"/><path fill="#FFF" d="M0 221h36l8-19h18l8 19h71v-15l7 15h36l7-15v15h176v-32h3c3 0 3 0 3 4v28h91v-7c8 4 19 7 34 7h39l8-19h18l8 19h74v-18l11 18h59V99h-58v14l-9-14h-60v14l-7-14h-81c-14 0-26 2-36 7v-7h-56v7c-6-6-14-7-23-7H180l-14 31-14-31H88v14l-7-14H26L0 157v64Zm227-17h-21v-69l-31 69h-18l-31-69v69H83l-8-20H31l-8 20H0l38-88h31l36 83v-83h34l28 59 25-59h35v88ZM68 166l-15-35-14 35h29Zm245 38h-70v-88h70v18h-49v16h48v18h-48v17h49v19Zm100-65c0 14-10 22-15 24 4 1 8 5 10 7 3 5 4 8 4 16v18h-22v-12c0-5 1-12-3-17-3-3-8-3-15-3h-23v32h-21v-88h48c11 0 19 0 26 4s11 10 11 19Zm-27 13c-3 2-6 2-10 2h-26v-19h26l10 1c3 2 4 4 4 8s-1 7-4 8Zm60 52h-21v-88h21v88Zm250 0h-30l-40-66v66h-43l-8-20h-44l-8 20h-24c-10 0-23-3-31-10-7-8-11-18-11-34 0-13 2-25 11-34 7-7 18-10 32-10h21v18h-20c-8 0-12 2-16 6-4 3-6 10-6 20 0 9 1 16 5 20s9 5 15 5h9l30-69h32l35 83v-83h33l37 61v-61h21v88Zm-128-38-15-35-14 35h29Zm182 178c-5 7-15 11-29 11h-40v-19h40c4 0 7 0 9-2l2-6-2-6-8-1c-20-1-44 0-44-28 0-12 8-26 30-26h42v-17h-39c-12 0-20 2-26 7v-7h-58c-9 0-20 2-25 7v-7H499v7c-9-6-22-7-29-7h-68v7c-6-6-21-7-30-7h-76l-17 18-16-18H149v122h112l17-19 17 19h69v-29h7c9 1 20 0 29-4v33h57v-32h3c3 0 3 0 3 4v28h173c11 0 22-3 28-8v8h55c11 0 23-1 31-5v-23Zm-342-47c0 24-18 29-36 29h-27v30h-41l-26-30-26 30h-84v-88h85l26 28 27-28h67c17 0 35 4 35 29Zm-167 40h-52v-17h46v-18h-46v-16h53l23 25-24 26Zm83 10-32-36 32-34v70Zm48-39h-27v-22h27c8 0 13 3 13 10 0 8-5 12-13 12Zm143-40h70v18h-49v16h48v18h-48v17h49v19h-70v-88Zm-27 47c5 1 8 5 10 7 3 4 4 8 4 16v18h-21v-11c0-6 0-14-4-18-3-3-8-4-15-4h-23v33h-21v-88h49c10 0 18 0 25 4s11 9 11 19c0 14-10 22-15 24Zm-12-11-10 1h-26v-19h26l10 1c3 2 4 4 4 8s-1 7-4 9Zm190 5c4 4 7 10 7 19 0 19-12 28-33 28h-42v-19h41l9-2 2-6-2-6-8-2c-19-1-44 1-44-27 0-13 8-26 30-26h42v18h-38l-9 2c-2 1-3 3-3 6 0 4 2 6 5 7l8 1h11c12 0 20 2 24 7Zm84-23h-38l-9 1c-2 2-3 4-3 7s2 5 5 6l8 1h11c12 1 19 3 24 7l2 3v-25Z"/></g></svg>
)

export const DiscoverIcon: React.FC<IconProps> = ({ className, ...props }) => (
  <svg {...props} className={cn('size-6', className)} viewBox="0 -140 780 780"><g fillRule="evenodd"><path fill="#4D4D4D" d="M55 0C25 0 0 25 0 55v391c0 30 25 55 55 55h670c30 0 55-25 55-55V55c0-30-25-55-55-55H55z"/><path fill="#FFF" d="M327 162c9 0 16 2 25 6v23c-8-8-16-11-25-11-20 0-35 15-35 34 0 20 15 34 36 34 9 0 16-3 24-11v23c-9 4-16 6-25 6-32 0-56-23-56-52s25-52 56-52zm-97 1c12 0 22 3 31 11l-11 13c-5-6-10-8-16-8-9 0-16 4-16 11 0 5 4 8 16 12 24 8 31 15 31 31 0 19-15 33-37 33-15 0-27-6-36-19l13-12c5 8 13 13 23 13 9 0 15-6 15-14 0-4-2-8-6-10l-14-6c-19-6-26-13-26-27 0-16 14-28 33-28zm235 1h22l28 67 29-67h22l-45 102h-12l-44-102zm-398 0h31c33 0 56 21 56 50 0 15-7 29-19 38-10 8-22 12-38 12H67V164zm97 0h20v100h-20V164zm411 0h59v17h-38v22h36v17h-36v27h38v17h-59V164zm72 0h31c23 0 37 11 37 30 0 15-9 25-24 28l33 42h-25l-29-40h-2v40h-21V164zm21 16v30h6c13 0 20-5 20-15s-7-15-20-15h-6zm-580 1v66h5c14 0 22-3 29-8a34 34 0 0 0 0-50c-7-6-15-8-29-8h-5z"/><path fill="#F47216" d="M415 161c31 0 56 24 56 53s-25 53-56 53-56-24-56-53 25-53 56-53zm365 127c-26 19-221 150-559 213h504c30 0 55-25 55-55V288z"/></g></svg>
)