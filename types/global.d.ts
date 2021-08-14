// Types for compiled templates
declare module 'ember-simple-bootstrap/templates/*' {
  import { TemplateFactory } from 'htmlbars-inline-precompile';
  const tmpl: TemplateFactory;
  export default tmpl;
}
