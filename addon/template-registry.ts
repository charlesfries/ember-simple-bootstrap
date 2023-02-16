import type BsAccordionComponent from './components/bs/accordion';
import type BsAccordionBodyComponent from './components/bs/accordion/body';
import type BsAccordionButtonComponent from './components/bs/accordion/button';
import type BsAccordionItemComponent from './components/bs/accordion/item';

import type BsAlertComponent from './components/bs/alert';
import type BsBadgeComponent from './components/bs/badge';

import type BsBreadcrumbComponent from './components/bs/breadcrumb';

import type BsButtonGroupComponent from './components/bs/button-group';
import type BsButtonComponent from './components/bs/button';

import type BsCardComponent from './components/bs/card';
import type BsCardBodyComponent from './components/bs/card/body';
import type BsCardFooterComponent from './components/bs/card/footer';
import type BsCardHeaderComponent from './components/bs/card/header';

import type BsCarouselComponent from './components/bs/carousel';
import type BsCloseButtonComponent from './components/bs/close-button';
import type BsCollapseComponent from './components/bs/collapse';

import type BsDropdownComponent from './components/bs/dropdown';
import type BsDropdownDividerComponent from './components/bs/dropdown/divider';
import type BsDropdownHeaderComponent from './components/bs/dropdown/header';
import type BsDropdownItemComponent from './components/bs/dropdown/item';

import type BsListGroupComponent from './components/bs/list-group';
import type BsListGroupItemComponent from './components/bs/list-group/item';

import type BsModalComponent from './components/bs/modal';
import type BsModalBodyComponent from './components/bs/modal/body';
import type BsModalFooterComponent from './components/bs/modal/footer';

import type BsNavComponent from './components/bs/nav';
import type BsNavbarComponent from './components/bs/navbar';

import type BsOffcanvasComponent from './components/bs/offcanvas';
import type BsOffcanvasBodyComponent from './components/bs/offcanvas/body';
import type BsOffcanvasHeaderComponent from './components/bs/offcanvas/header';

import type BsPaginationComponent from './components/bs/pagination';
import type BsPlaceholderComponent from './components/bs/placeholder';
import type BsPopoverComponent from './components/bs/popover';

import type BsProgressComponent from './components/bs/progress';
import type BsProgressBarComponent from './components/bs/progress/bar';

import type BsSpinnerComponent from './components/bs/spinner';

import type BsToastComponent from './components/bs/toast';
import type BsToastBodyComponent from './components/bs/toast/body';
import type BsToastHeaderComponent from './components/bs/toast/header';

import type BsToolbarComponent from './components/bs/toolbar';

export default interface Registry {
  'Bs::Accordion': typeof BsAccordionComponent;
  'Bs::Accordion::Body': typeof BsAccordionBodyComponent;
  'Bs::Accordion::Button': typeof BsAccordionButtonComponent;
  'Bs::Accordion::Item': typeof BsAccordionItemComponent;

  'Bs::Alert': typeof BsAlertComponent;
  'Bs::Badge': typeof BsBadgeComponent;

  'Bs::Breadcrumb': typeof BsBreadcrumbComponent;

  'Bs::ButtonGroup': typeof BsButtonGroupComponent;
  'Bs::Button': typeof BsButtonComponent;

  'Bs::Card': typeof BsCardComponent;
  'Bs::Card::Body': typeof BsCardBodyComponent;
  'Bs::Card::Footer': typeof BsCardFooterComponent;
  'Bs::Card::Header': typeof BsCardHeaderComponent;

  'Bs::Carousel': typeof BsCarouselComponent;
  'Bs::CloseButton': typeof BsCloseButtonComponent;
  'Bs::Collapse': typeof BsCollapseComponent;

  'Bs::Dropdown': typeof BsDropdownComponent;
  'Bs::Dropdown::Divider': typeof BsDropdownDividerComponent;
  'Bs::Dropdown::Header': typeof BsDropdownHeaderComponent;
  'Bs::Dropdown::Item': typeof BsDropdownItemComponent;

  'Bs::ListGroup': typeof BsListGroupComponent;
  'Bs::ListGroup::Item': typeof BsListGroupItemComponent;

  'Bs::Modal': typeof BsModalComponent;
  'Bs::Modal::Body': typeof BsModalBodyComponent;
  'Bs::Modal::Footer': typeof BsModalFooterComponent;

  'Bs::Nav': typeof BsNavComponent;
  'Bs::Navbar': typeof BsNavbarComponent;

  'Bs::Offcanvas': typeof BsOffcanvasComponent;
  'Bs::Offcanvas::Body': typeof BsOffcanvasBodyComponent;
  'Bs::Offcanvas::Header': typeof BsOffcanvasHeaderComponent;

  'Bs::Pagination': typeof BsPaginationComponent;
  'Bs::Placeholder': typeof BsPlaceholderComponent;
  'Bs::Popover': typeof BsPopoverComponent;

  'Bs::Progress': typeof BsProgressComponent;
  'Bs::Progress::Bar': typeof BsProgressBarComponent;

  'Bs::Spinner': typeof BsSpinnerComponent;

  'Bs::Toast': typeof BsToastComponent;
  'Bs::Toast::Body': typeof BsToastBodyComponent;
  'Bs::Toast::Header': typeof BsToastHeaderComponent;

  'Bs::Toolbar': typeof BsToolbarComponent;
}
