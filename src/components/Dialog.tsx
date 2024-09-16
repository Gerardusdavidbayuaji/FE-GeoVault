import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = {
  title?: string;
  children: ReactNode;
  description?: ReactNode;
  onCancel?: () => {};
  onAction?: () => {};
  action?: string;
  triggerClass?: string;
};

const CustomDialog = (props: Props) => {
  const {
    children,
    title,
    description,
    onCancel,
    onAction,
    action,
    triggerClass = "",
  } = props;

  return (
    <Dialog>
      <DialogTrigger className={`${triggerClass}`}>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <DialogFooter>
          {onCancel && <Button onClick={onCancel}>Cancel</Button>}
          {onAction && <Button onClick={onAction}>{action}</Button>}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
