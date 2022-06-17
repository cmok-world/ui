interface Props extends React.ComponentPropsWithRef<"button"> {}

export function Button(props: Props) {
  return <button {...props} />;
}
