import { Button } from "components/lib/Components";
import { MainLogo } from "components/logos/Logos";

export function Navigation() {
  return (
    <div>
      <h2>Navigation</h2>
      <MainLogo width="80" height="80" fill="black" />
      <Button>About</Button>
      <Button>Contacts</Button>
      <Button type="primary">Make Sweet</Button>
    </div>
  );
}
