Compare a BOM file against all existing orders in the tracker to find duplicates.

The user will provide a file path to a BOM file: $ARGUMENTS

Your job:

1. Read and parse the file:
   - For CSV: parse directly, detect columns by header names
   - For XLSX: use Python with openpyxl to read, handle encoding with `sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')`

2. Read the existing orders from the `SEED_ORDERS` array in `js/app.js` to get all currently tracked parts.

3. Compare the new BOM parts against ALL existing parts across all orders. Check for:

   **Exact matches** (same LCSC/supplier part number):
   - Flag these clearly — the user already has this exact part on order or in stock

   **Near matches** (same functional value + similar package):
   - Same resistance/capacitance/inductance value AND same package size (e.g., both 10kΩ 0402)
   - Same value but different package (e.g., both 100nF but 0402 vs 0603) — note as potential substitution
   - Same connector type (e.g., both USB-C) — warn about pin compatibility

4. Present results in a clear table format:

   ```
   EXACT DUPLICATES (same part number — you already have these):
   | New BOM Part | Existing Order | Qty on Hand | Notes |

   NEAR DUPLICATES (similar parts — may be interchangeable):
   | New BOM Part | Existing Part | Match Type | Notes |

   UNIQUE PARTS (no matches found — need to order):
   | Part Number | Description | Qty | Package |
   ```

5. Provide a summary:
   - Total parts in new BOM
   - How many are exact duplicates (no need to reorder)
   - How many are near duplicates (might not need to reorder)
   - How many are unique (definitely need to order)
   - Estimated savings if duplicates are skipped

IMPORTANT: Do NOT add this BOM to the tracker. This is comparison only.
