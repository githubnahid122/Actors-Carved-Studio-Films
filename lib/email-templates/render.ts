/** Renders a simple, on-brand HTML admin-notification email from a set of label/value rows. */
export function renderNotificationEmail(params: {
  heading: string;
  intro: string;
  rows: Array<{ label: string; value: string }>;
}): string {
  const { heading, intro, rows } = params;
  const rowsHtml = rows
    .map(
      (row) => `
        <tr>
          <td style="padding:10px 16px;border-bottom:1px solid #262421;color:#9a958b;font-size:13px;width:180px;vertical-align:top;">${row.label}</td>
          <td style="padding:10px 16px;border-bottom:1px solid #262421;color:#f5f3ef;font-size:14px;vertical-align:top;">${row.value || "—"}</td>
        </tr>`,
    )
    .join("");

  return `
  <div style="background:#050505;padding:32px 16px;font-family:Helvetica,Arial,sans-serif;">
    <div style="max-width:560px;margin:0 auto;background:#0d0d0d;border:1px solid #262421;border-radius:6px;overflow:hidden;">
      <div style="padding:24px 24px 0;">
        <p style="margin:0;color:#c9a24b;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Actors Carved Studio &amp; Films</p>
        <h1 style="margin:8px 0 4px;color:#f5f3ef;font-size:20px;">${heading}</h1>
        <p style="margin:0 0 16px;color:#9a958b;font-size:14px;">${intro}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">${rowsHtml}</table>
      <div style="padding:16px 24px 24px;">
        <p style="margin:0;color:#6f6a62;font-size:12px;">Submitted via actorscarved.com</p>
      </div>
    </div>
  </div>`;
}
