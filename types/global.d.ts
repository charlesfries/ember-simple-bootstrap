// Types for compiled templates
declare module 'ember-simple-bootstrap/templates/*' {
  import { TemplateFactory } from 'ember-cli-htmlbars';

  const tmpl: TemplateFactory;
  export default tmpl;
}
