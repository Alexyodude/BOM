Add a BOM order to the tracker.

The user will provide a file path to a BOM file (CSV or XLSX). Your job:

1. Read and parse the file at: $ARGUMENTS
   - For CSV: parse directly, detect columns by header names (LCSC Part Number, Description, Quantity, Unit Price, Package, etc.)
   - For XLSX: use Python with openpyxl to read the file, handle encoding issues with `sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')`

2. Extract order metadata:
   - Derive the order name from the filename
   - Identify the supplier (e.g., "LCSC" if LCSC part numbers are present)
   - Use today's date as the order date

3. Build the order object with this structure for each part:
   ```
   { partNumber, description, qty, unitPrice, designator, package }
   ```
   - `partNumber`: LCSC part number (e.g., C102685) or supplier part number
   - `description`: combine the description with manufacturer part number and manufacturer name
   - `qty`: quantity ordered
   - `unitPrice`: unit price in USD
   - `designator`: reference designators if available (e.g., "C1,C2")
   - `package`: footprint/package (e.g., "0402", "SOT-23")

4. Add the order to the `SEED_ORDERS` array in `js/app.js`:
   - Generate a unique `id` (lowercase, kebab-case based on order name)
   - Set `status` to `'ordered'`
   - Increment `CURRENT_SEED_VERSION` by 1

5. Copy the source file to the `data/` directory in the project for archival.

6. Commit with message: "Add order: {order name}" and push to GitHub.

7. Report a summary: order name, number of parts, total cost.

IMPORTANT: Do NOT add the order if it's just for comparison — only add confirmed orders.
