import { Component, EventEmitter, Input, Output } from "@angular/core";

import { PdfTemplateDefinition } from "../../services/pdf-manager.service";

@Component({
  selector: "app-pdf-template-selector",
  templateUrl: "./pdf-template-selector.component.html",
  styleUrls: ["./pdf-template-selector.component.scss"],
})
export class PdfTemplateSelectorComponent {
  @Input() templates: PdfTemplateDefinition[] = [];
  @Input() selectedValue = "legacy";
  @Output() flowChange = new EventEmitter<string>();

  onFlowChange(value: string): void {
    this.flowChange.emit(value);
  }
}
