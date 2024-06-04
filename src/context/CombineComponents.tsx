interface Props {
  children: React.ReactElement;
}

export const CombineComponents = (...components: React.FC<Props>[]) => {
  return components.reduce(
    (AccumulatedComponents: any, CurrentComponent) => {
      return ({ children }: { children: React.ReactElement }) => {
        return (
          <AccumulatedComponents>
            <CurrentComponent>{children}</CurrentComponent>
          </AccumulatedComponents>
        );
      };
    },
    ({ children }: { children: React.ReactElement }) => <>{children}</>
  );
};
