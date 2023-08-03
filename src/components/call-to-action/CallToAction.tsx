import { css, palette } from "styles";

export function CallToAction() {
  return (
    <div
      className={css({
        borderTop: `0.4rem solid ${palette.main_primary_dark}`,
      })}
    >
      <h2>Feedbacks</h2>
    </div>
  );
}
