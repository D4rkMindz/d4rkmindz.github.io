## PHP XML
#### Links
[What are XML namespaces?(StackOverflow)](https://stackoverflow.com/questions/44894426/reference-how-do-i-handle-namespaces-tags-and-attributes-with-colon-in-in-si#answer-44894427)


[Namespaces in XML (StackOverflow)](https://stackoverflow.com/questions/23492186/xpath-does-not-work-with-xmlns?answertab=votes#tab-top)


[How does XPath deal with XML Namespaces?(StackOverflow)](https://stackoverflow.com/questions/40796231/how-does-xpath-deal-with-xml-namespaces)


### XML Dateien auslesen

XML ist eine sehr geläufige Sprache. Ziemlich jede Technologie "versteht" XML. Auch PHP bringt eigene Möglichkeiten zum Parsen von XML-Dateien mit. Mittels des [SimpleXML](http://php.net/manual/en/class.simplexmlelement.php) Elementes kann man viele einfache Methoden zum Lesen und Manipulieren von XML Dateien.





XML ist eine Sprache, welche über einen DOM aufgebaut ist. Man kann diesen auch mittels [XPath](https://de.wikipedia.org/wiki/XPath) auslesen. Dazu kann man Queries schreiben um gewisse Elemente in einem DOM anzusprechen.


In PHP kann man den XML DOM mittels XPath auslesen. Man erstellt ein DOM Dokument welches die zu parsende Datei entält. Danach wird dieses Element in ein DOM XPath Objekt eingegeben. Das [w3schools](/de/http/**www.w3schools.com/xml/xpath_syntax.asp) sehr gut aufgelistet.


Man kann der ''query()'' Methode ein Resultat eines Querys als Root Element mitgeben. Somit wird bei der Ausführung des Querys dann dieses Element als Root definiert.


Wichtig ist auch, dass man einen Namespace definiert. In dem unten aufgeführten Beispiel ist dieser eindeutig mit "http://tempuri.org/invoice_batch_generic.xsd" hinterlegt. Im Code wird dann eine Referenz mit "ns" auf genau diesen Namespace gelegt. 
```php
<?php

$dom = new DOMDocument("1.0", "UTF-8");
$dom->preserveWhiteSpace = false;
$dom->load(_DIR_ . '/invoice.xml');
$xpath = new DOMXPath($dom);
$xpath->registerNamespace("ns", "http://tempuri.org/invoice_batch_generic.xsd");
// Root node
$root = $xpath->query('/ns:invoice_batch_generic')->item(0);
// Invoice data
$taxRate = $xpath->query('ns:taxregioncategory/ns:total_tax_rate_per_category_and_region', $root)->item(0)->nodeValue;
$totalTaxAmount = $xpath->query('ns:taxregioncategory/ns:total_tax_amount', $root)->item(0)->nodeValue;
// Invoice items
$itemList = array();
$invoicesNodes = $xpath->query('ns:account/ns:invoice', $root);
foreach ($invoicesNodes as $invoiceNode) {
    /** @var DOMNode $invoiceNode */
    $invoiceItemNodes = $xpath->query('ns:invoice_item', $invoiceNode);
    $invoiceNumber = $xpath->query('ns:invoice_number', $invoiceNode)->item(0)->nodeValue;
    /** @var DOMNode $invoiceItemNode */
    foreach ($invoiceItemNodes as $invoiceItemNode) {
        $invoiceId = $xpath->query('ns:invoice_id', $invoiceItemNode)->item(0)->nodeValue;
        $invoiceId = $xpath->query('ns:invoice_id', $invoiceItemNode)->item(0)->nodeValue;
        $invoiceItemId = $xpath->query('ns:invoice_item_id', $invoiceItemNode)->item(0)->nodeValue;
        $serviceName = $xpath->query('ns:service_name', $invoiceItemNode)->item(0)->nodeValue;
        $serviceUnits = $xpath->query('ns:service_units', $invoiceItemNode)->item(0)->nodeValue;
        $serviceExtendedPrice = $xpath->query('ns:service_extended_price', $invoiceItemNode)->item(0)->nodeValue;
        $itemList[$invoiceNumber][] = [
            'invoice_id' => $invoiceId,
            'invoice_item_id' => $invoiceItemId,
            'service_name' => $serviceName,
            'service_units' => $serviceUnits,
            'service_extended_price' => $serviceExtendedPrice,
        ];
    }
}
function trim_price($price): string
{
    return (string)substr($price, 0, (strpos($price, '.') + 3));
}

?>
<html>
<body>
<h1>Rechnungen</h1>
<h5>Mwst. Satz: <?= trim_price($taxRate) ?></h5>
<h5>Total Mwst.: <?= trim_price($totalTaxAmount) ?></h5>
<?php foreach ($itemList as $key => $items): ?>
	<h5>Rechnungsnummer: <?= $key ?></h5>
	<table style="border: 1px solid gray;border-spacing: 0">
		<thead>
		<tr>
			<th style="border: 1px solid gray;border-spacing: 0">Rechnungsnummer</th>
			<th style="border: 1px solid gray;border-spacing: 0">Rechnungsposition</th>
			<th style="border: 1px solid gray;border-spacing: 0">Service name</th>
			<th style="border: 1px solid gray;border-spacing: 0">Anzahl</th>
			<th style="border: 1px solid gray;border-spacing: 0">Preis</th>
		</tr>
		</thead>
        <?php foreach ($items as $item): ?>
			<tr>
				<td style="border: 1px solid gray;border-spacing: 0"><?= $item['invoice_id']; ?></td>
				<td style="border: 1px solid gray;border-spacing: 0"><?= $item['invoice_item_id'] ?></td>
				<td style="border: 1px solid gray;border-spacing: 0"><?= $item['service_name'] ?></td>
				<td style="border: 1px solid gray;border-spacing: 0"><?= $item['service_units'] ?></td>
				<td style="border: 1px solid gray;border-spacing: 0"><?= trim_price($item['service_extended_price']) ?></td>
			</tr>
        <?php endforeach; ?>
	</table>
<?php endforeach; ?>
</body>
</html>
```
Das Auszulesende XML sieht wie folgt aus.
```xml
<invoice_batch_generic xmlns="http://tempuri.org/invoice_batch_generic.xsd">
    <invoice_batch>
        <batch_id>171</batch_id>
        <create_date>2017-07-11T14:23:39.133-04:00</create_date>
        <create_by_id>29682885</create_by_id>
        <batch_data />
    </invoice_batch>
    <taxregioncategory>
        <tax_category_name />
        <total_tax_rate_per_category_and_region>8.0000000</total_tax_rate_per_category_and_region>
        <total_tax_amount>12.00000</total_tax_amount>
    </taxregioncategory>
    <account>
        <account_id>232</account_id>
        <parent_name />
        <creator_name>Dominic</creator_name>
        <narrative_creator_name>Dominic</narrative_creator_name>
        <territory_name />
        <cust_id />
        <cust_name>Metro </cust_name>
        <taxable>No</taxable>
        <addr1>123 Anywhere Ln</addr1>
        <addr2 />
        <city>Denver</city>
        <account_region>CO</account_region>
        <country>United States</country>
        <postal_code>80203</postal_code>
        <phone>1234567890</phone>
        <fax />
        <attention />
        <billing_addr1>132 anywhere ln</billing_addr1>
        <billing_addr2 />
        <billing_city>Denver</billing_city>
        <billing_region>CO</billing_region>
        <billing_country>United States</billing_country>
        <billing_postal_code>80203</billing_postal_code>
        <billing_attention />
        <tax_id />
        <tax_group_name />
        <parent_id />
        <payment_term_name>NET 15</payment_term_name>
        <account_invoice_email_recipient></account_invoice_email_recipient>
        <invoice>
            <invoice_id>471</invoice_id>
            <account_id>232</account_id>
            <owner_name>Dominic</owner_name>
            <narrative_owner_name>Dominic</narrative_owner_name>
            <invoice_date>2017-07-11T00:00:00-04:00</invoice_date>
            <entry_time_stamp>2017-07-11T14:23:39-04:00</entry_time_stamp>
            <invoice_number>2374</invoice_number>
            <comments />
            <invoice_total>1087.0800</invoice_total>
            <total_tax_value>0.0000</total_tax_value>
            <tax_description />
            <tax_group />
            <date_range_from>2017-08-01T00:00:00-04:00</date_range_from>
            <date_range_to>2017-08-30T00:00:00-04:00</date_range_to>
            <purchase_order_number />
            <payment_term_name>NET 15</payment_term_name>
            <batch_id>171</batch_id>
            <invoice_transferred_flag>No</invoice_transferred_flag>
            <payment_due_date>2017-07-26T00:00:00-04:00</payment_due_date>
            <taxes />
            <invoice_item>
                <invoice_item_id>1</invoice_item_id>
                <invoice_id>471</invoice_id>
                <item_name>SOME STUFF</item_name>
                <item_id>9234</item_id>
                <item_date>2017-08-01T00:00:00-04:00</item_date>
                <adjusted_item_id />
                <type_of_transaction>Recurring Service</type_of_transaction>
                <allocation_code_name>Managed Services</allocation_code_name>
                <allocation_code_external_number />
                <allocation_code_non_billable>No</allocation_code_non_billable>
                <allocation_code_taxable>No</allocation_code_taxable>
                <task_or_ticket_number />
                <task_or_ticket_title>Recurring Service</task_or_ticket_title>
                <ticket_contact />
                <narrative_ticket_contact />
                <adjustment_reason />
                <resource_name> Dominic</resource_name>
                <narrative_resource_name>Dominic </narrative_resource_name>
                <resource_payroll_identifier />
                <role_name />
                <department>Operations</department>
                <project_name />
                <project_lead />
                <narrative_project_lead />
                <external_project_number />
                <internal_project_number />
                <gl_code_desc />
                <gl_code_name />
                <contract_name>Metro 2017</contract_name>
                <external_contract_number />
                <worked_hours>0.0000</worked_hours>
                <non_billable_hours>0.0000</non_billable_hours>
                <billable_hours>0.0000</billable_hours>
                <hourly_billing_rate>21.4800</hourly_billing_rate>
                <extended_price>859.2000</extended_price>
                <time_entry_summary_notes />
                <quantity>40.0000</quantity>
                <expense_type />
                <installed_product_name />
                <subscription_name />
                <subscription_desc />
                <subscription_cost>0.00</subscription_cost>
                <milestone_title />
                <milestone_description />
                <milestone_amount>0.0000</milestone_amount>
                <service_or_bundle_id>63</service_or_bundle_id>
                <service_name>STUFF</service_name>
                <service_invoice_description>STUFF</service_invoice_description>
                <service_units>40</service_units>
                <service_unit_price>21.4800</service_unit_price>
                <service_extended_price>859.2000</service_extended_price>
                <service_period_start_date>2017-08-01T00:00:00-04:00</service_period_start_date>
                <service_period_end_date>2017-08-31T00:00:00-04:00</service_period_end_date>
                <setup_fee>0.0000</setup_fee>
                <billing_approved_by>, Dominic</billing_approved_by>
                <narrative_billing_approved_by>Dominic </narrative_billing_approved_by>
                <approved_date>2017-07-11T11:03:25.957-04:00</approved_date>
                <posted_date>2017-07-10T20:00:00-04:00</posted_date>
                <non_overage_retainer_line_item_tax>0.0000</non_overage_retainer_line_item_tax>
                <gross_amount>859.2000</gross_amount>
                <contract_type>7</contract_type>
                <department_number />
                <effective_hourly_billing_rate>21.4800</effective_hourly_billing_rate>
                <external_product_id />
                <cost_description />
                <project_phase />
                <our_cost>310.0000</our_cost>
                <expense_description />
                <line_item_id>1</line_item_id>
                <tax_region_and_category_id>0</tax_region_and_category_id>
                <tax_region_name />
                <tax_category_name />
                <total_tax_rate_per_region_and_category>0.0000000</total_tax_rate_per_region_and_category>
                <total_tax_amount>0.00000</total_tax_amount>
                <allocation_code_id>29682901</allocation_code_id>
                <serial_number />
                <contract_period_type>m</contract_period_type>
                <service_period_type>m</service_period_type>
                <account_manager_when_posted>, Dominic</account_manager_when_posted>
            </invoice_item>
            <invoice_item>
                <invoice_item_id>2</invoice_item_id>
                <invoice_id>471</invoice_id>
                <item_name>SEServer [Aug 01, 2017 - Aug 31, 2017]</item_name>
                <item_id>9235</item_id>
                <item_date>2017-08-01T00:00:00-04:00</item_date>
                <adjusted_item_id />
                <type_of_transaction>Recurring Service</type_of_transaction>
                <allocation_code_name>Managed Services</allocation_code_name>
                <allocation_code_external_number />
                <allocation_code_non_billable>No</allocation_code_non_billable>
                <allocation_code_taxable>No</allocation_code_taxable>
                <task_or_ticket_number />
                <task_or_ticket_title>Recurring Service</task_or_ticket_title>
                <ticket_contact />
                <narrative_ticket_contact />
                <adjustment_reason />
                <resource_name>, Dominic</resource_name>
                <narrative_resource_name>Dominic </narrative_resource_name>
                <resource_payroll_identifier />
                <role_name />
                <department>Operations</department>
                <project_name />
                <project_lead />
                <narrative_project_lead />
                <external_project_number />
                <internal_project_number />
                <gl_code_desc />
                <gl_code_name />
                <contract_name>Metro  2017</contract_name>
                <external_contract_number />
                <worked_hours>0.0000</worked_hours>
                <non_billable_hours>0.0000</non_billable_hours>
                <billable_hours>0.0000</billable_hours>
                <hourly_billing_rate>110.4800</hourly_billing_rate>
                <extended_price>220.9600</extended_price>
                <time_entry_summary_notes />
                <quantity>2.0000</quantity>
                <expense_type />
                <installed_product_name />
                <subscription_name />
                <subscription_desc />
                <subscription_cost>0.00</subscription_cost>
                <milestone_title />
                <milestone_description />
                <milestone_amount>0.0000</milestone_amount>
                <service_or_bundle_id>62</service_or_bundle_id>
                <service_name>SECURE MANAGED SERVICES: Server</service_name>
                <service_invoice_description>Secure Managed Services Per Server</service_invoice_description>
                <service_units>2</service_units>
                <service_unit_price>110.4800</service_unit_price>
                <service_extended_price>220.9600</service_extended_price>
                <service_period_start_date>2017-08-01T00:00:00-04:00</service_period_start_date>
                <service_period_end_date>2017-08-31T00:00:00-04:00</service_period_end_date>
                <setup_fee>0.0000</setup_fee>
                <billing_approved_by>, Dominic</billing_approved_by>
                <narrative_billing_approved_by> Kirby</narrative_billing_approved_by>
                <approved_date>2017-07-11T11:03:25.957-04:00</approved_date>
                <posted_date>2017-07-10T20:00:00-04:00</posted_date>
                <non_overage_retainer_line_item_tax>0.0000</non_overage_retainer_line_item_tax>
                <gross_amount>220.9600</gross_amount>
                <contract_type>7</contract_type>
                <department_number />
                <effective_hourly_billing_rate>110.4800</effective_hourly_billing_rate>
                <external_product_id />
                <cost_description />
                <project_phase />
                <our_cost>91.5000</our_cost>
                <expense_description />
                <line_item_id>2</line_item_id>
                <tax_region_and_category_id>0</tax_region_and_category_id>
                <tax_region_name />
                <tax_category_name />
                <total_tax_rate_per_region_and_category>0.0000000</total_tax_rate_per_region_and_category>
                <total_tax_amount>0.00000</total_tax_amount>
                <allocation_code_id>29682901</allocation_code_id>
                <serial_number />
                <contract_period_type>m</contract_period_type>
                <service_period_type>m</service_period_type>
                <account_manager_when_posted>, Dominic</account_manager_when_posted>
            </invoice_item>
            <invoice_item>
                <invoice_item_id>3</invoice_item_id>
                <invoice_id>471</invoice_id>
                <item_name>SECURE MANAGED SERVICES: Firewall  [Aug 01, 2017 - Aug 31, 2017]</item_name>
                <item_id>9236</item_id>
                <item_date>2017-08-01T00:00:00-04:00</item_date>
                <adjusted_item_id />
                <type_of_transaction>Recurring Service</type_of_transaction>
                <allocation_code_name>Hardware as a Service</allocation_code_name>
                <allocation_code_external_number>HWAAS</allocation_code_external_number>
                <allocation_code_non_billable>No</allocation_code_non_billable>
                <allocation_code_taxable>No</allocation_code_taxable>
                <task_or_ticket_number />
                <task_or_ticket_title>Recurring Service</task_or_ticket_title>
                <ticket_contact />
                <narrative_ticket_contact />
                <adjustment_reason />
                <resource_name>, Dominic</resource_name>
                <narrative_resource_name>Dominic </narrative_resource_name>
                <resource_payroll_identifier />
                <role_name />
                <department>Operations</department>
                <project_name />
                <project_lead />
                <narrative_project_lead />
                <external_project_number />
                <internal_project_number />
                <gl_code_desc />
                <gl_code_name />
                <contract_name>Metro  2017</contract_name>
                <external_contract_number />
                <worked_hours>0.0000</worked_hours>
                <non_billable_hours>0.0000</non_billable_hours>
                <billable_hours>0.0000</billable_hours>
                <hourly_billing_rate>6.9200</hourly_billing_rate>
                <extended_price>6.9200</extended_price>
                <time_entry_summary_notes />
                <quantity>1.0000</quantity>
                <expense_type />
                <installed_product_name />
                <subscription_name />
                <subscription_desc />
                <subscription_cost>0.00</subscription_cost>
                <milestone_title />
                <milestone_description />
                <milestone_amount>0.0000</milestone_amount>
                <service_or_bundle_id>64</service_or_bundle_id>
                <service_name>SECURE MANAGED SERVICES: Firewall TZ300</service_name>
                <service_invoice_description>SonicWALL TZ300 Managed Firewall</service_invoice_description>
                <service_units>1</service_units>
                <service_unit_price>6.9200</service_unit_price>
                <service_extended_price>6.9200</service_extended_price>
                <service_period_start_date>2017-08-01T00:00:00-04:00</service_period_start_date>
                <service_period_end_date>2017-08-31T00:00:00-04:00</service_period_end_date>
                <setup_fee>0.0000</setup_fee>
                <billing_approved_by>, Dominic</billing_approved_by>
                <narrative_billing_approved_by>Dominic </narrative_billing_approved_by>
                <approved_date>2017-07-11T11:03:25.957-04:00</approved_date>
                <posted_date>2017-07-10T20:00:00-04:00</posted_date>
                <non_overage_retainer_line_item_tax>0.0000</non_overage_retainer_line_item_tax>
                <gross_amount>6.9200</gross_amount>
                <contract_type>7</contract_type>
                <department_number />
                <effective_hourly_billing_rate>6.9200</effective_hourly_billing_rate>
                <external_product_id />
                <cost_description />
                <project_phase />
                <our_cost>46.0000</our_cost>
                <expense_description />
                <line_item_id>3</line_item_id>
                <tax_region_and_category_id>0</tax_region_and_category_id>
                <tax_region_name />
                <tax_category_name />
                <total_tax_rate_per_region_and_category>0.0000000</total_tax_rate_per_region_and_category>
                <total_tax_amount>0.00000</total_tax_amount>
                <allocation_code_id>29683499</allocation_code_id>
                <serial_number />
                <contract_period_type>m</contract_period_type>
                <service_period_type>m</service_period_type>
                <account_manager_when_posted>, Dominic</account_manager_when_posted>
            </invoice_item>
        </invoice>
        <invoice>
            <invoice_id>472</invoice_id>
            <account_id>233</account_id>
            <owner_name>Dominic</owner_name>
            <narrative_owner_name>Dominic</narrative_owner_name>
            <invoice_date>2017-07-11T00:00:00-04:00</invoice_date>
            <entry_time_stamp>2017-07-11T14:23:39-05:00</entry_time_stamp>
            <invoice_number>2375</invoice_number>
            <comments />
            <invoice_total>1087.0800</invoice_total>
            <total_tax_value>0.0000</total_tax_value>
            <tax_description />
            <tax_group />
            <date_range_from>2017-08-01T00:00:00-04:00</date_range_from>
            <date_range_to>2017-08-30T00:00:00-04:00</date_range_to>
            <purchase_order_number />
            <payment_term_name>NET 15</payment_term_name>
            <batch_id>171</batch_id>
            <invoice_transferred_flag>No</invoice_transferred_flag>
            <payment_due_date>2017-07-26T00:00:00-04:00</payment_due_date>
            <taxes />
            <invoice_item>
                <invoice_item_id>1</invoice_item_id>
                <invoice_id>472</invoice_id>
                <item_name>SOME STUFF</item_name>
                <item_id>9134</item_id>
                <item_date>2017-08-02T00:00:00-04:00</item_date>
                <adjusted_item_id />
                <type_of_transaction>Recurring Service</type_of_transaction>
                <allocation_code_name>Managed Services</allocation_code_name>
                <allocation_code_external_number />
                <allocation_code_non_billable>No</allocation_code_non_billable>
                <allocation_code_taxable>No</allocation_code_taxable>
                <task_or_ticket_number />
                <task_or_ticket_title>Recurring Service</task_or_ticket_title>
                <ticket_contact />
                <narrative_ticket_contact />
                <adjustment_reason />
                <resource_name> Dominic</resource_name>
                <narrative_resource_name>Dominic </narrative_resource_name>
                <resource_payroll_identifier />
                <role_name />
                <department>Operations</department>
                <project_name />
                <project_lead />
                <narrative_project_lead />
                <external_project_number />
                <internal_project_number />
                <gl_code_desc />
                <gl_code_name />
                <contract_name>Metro 2017</contract_name>
                <external_contract_number />
                <worked_hours>0.0000</worked_hours>
                <non_billable_hours>0.0000</non_billable_hours>
                <billable_hours>0.0000</billable_hours>
                <hourly_billing_rate>21.4800</hourly_billing_rate>
                <extended_price>859.2000</extended_price>
                <time_entry_summary_notes />
                <quantity>40.0000</quantity>
                <expense_type />
                <installed_product_name />
                <subscription_name />
                <subscription_desc />
                <subscription_cost>0.00</subscription_cost>
                <milestone_title />
                <milestone_description />
                <milestone_amount>0.0000</milestone_amount>
                <service_or_bundle_id>63</service_or_bundle_id>
                <service_name>SOME STUFF</service_name>
                <service_invoice_description>STUFF</service_invoice_description>
                <service_units>40</service_units>
                <service_unit_price>21.4800</service_unit_price>
                <service_extended_price>859.2000</service_extended_price>
                <service_period_start_date>2017-08-01T00:00:00-04:00</service_period_start_date>
                <service_period_end_date>2017-08-31T00:00:00-04:00</service_period_end_date>
                <setup_fee>0.0000</setup_fee>
                <billing_approved_by>, Dominic</billing_approved_by>
                <narrative_billing_approved_by>Dominic </narrative_billing_approved_by>
                <approved_date>2017-07-11T11:03:25.957-04:00</approved_date>
                <posted_date>2017-07-10T20:00:00-04:00</posted_date>
                <non_overage_retainer_line_item_tax>0.0000</non_overage_retainer_line_item_tax>
                <gross_amount>859.2000</gross_amount>
                <contract_type>7</contract_type>
                <department_number />
                <effective_hourly_billing_rate>21.4800</effective_hourly_billing_rate>
                <external_product_id />
                <cost_description />
                <project_phase />
                <our_cost>310.0000</our_cost>
                <expense_description />
                <line_item_id>1</line_item_id>
                <tax_region_and_category_id>0</tax_region_and_category_id>
                <tax_region_name />
                <tax_category_name />
                <total_tax_rate_per_region_and_category>0.0000000</total_tax_rate_per_region_and_category>
                <total_tax_amount>0.00000</total_tax_amount>
                <allocation_code_id>29682901</allocation_code_id>
                <serial_number />
                <contract_period_type>m</contract_period_type>
                <service_period_type>m</service_period_type>
                <account_manager_when_posted>, Dominic</account_manager_when_posted>
            </invoice_item>

        </invoice>
    </account>
</invoice_batch_generic>
```
