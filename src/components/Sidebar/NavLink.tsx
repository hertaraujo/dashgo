import {
  Icon,
  Link as ChakraLink,
  Text,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import ActiveLink from "../ActiveLink";

interface NavLinkProps extends ChakraLinkProps {
  icon: React.ElementType; // quando passamos o componente sem instanciar a classes ou chamar a função.
  children: string;
  href: string;
}

function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href}>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize={20} />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
}

export default NavLink;
