import classes from "./form-label.module.css";

interface FormLabelProps {
  children: React.ReactNode;
  htmlFor?: string;
}

export default function FormLabel({ children, htmlFor }: FormLabelProps) {
  return (
    <label htmlFor={htmlFor} className={classes.label}>
      {children}
    </label>
  );
}
