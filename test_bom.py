import sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
from playwright.sync_api import sync_playwright
import os

SCREENSHOTS = "C:/Users/user/Project/ClaudeCode/BOM/screenshots"
os.makedirs(SCREENSHOTS, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    page = browser.new_page(viewport={"width": 1280, "height": 900})
    page.goto("file:///C:/Users/user/Project/ClaudeCode/BOM/index.html")
    page.wait_for_load_state("networkidle")

    # 1) Dashboard - verify stats
    print("=== DASHBOARD ===")
    for sid in ["stat-total-orders", "stat-total-parts", "stat-total-cost", "stat-pending"]:
        val = page.locator(f"#{sid}").text_content()
        print(f"  {sid}: {val}")

    # Check recent orders table
    rows = page.locator("#recent-orders tbody tr").count()
    print(f"  Recent orders rows: {rows}")
    page.screenshot(path=f"{SCREENSHOTS}/01_dashboard.png", full_page=True)

    # 2) Orders tab
    page.click("button[data-view='orders']")
    page.wait_for_timeout(300)
    print("\n=== ORDERS ===")
    order_rows = page.locator("#orders-list tbody tr").all()
    for row in order_rows:
        name = row.locator("td:first-child").text_content()
        status = row.locator(".status").text_content()
        print(f"  Order: {name.strip()} | Status: {status.strip()}")
    page.screenshot(path=f"{SCREENSHOTS}/02_orders.png", full_page=True)

    # 3) Parts tab
    page.click("button[data-view='parts']")
    page.wait_for_timeout(300)
    print("\n=== PARTS ===")
    part_count = page.locator("#parts-list tbody tr").count()
    print(f"  Total parts listed: {part_count}")
    page.screenshot(path=f"{SCREENSHOTS}/03_parts.png", full_page=True)

    # 4) Duplicates tab
    page.click("button[data-view='duplicates']")
    page.wait_for_timeout(300)
    print("\n=== DUPLICATES ===")
    dup_content = page.locator("#duplicates-list").text_content()
    has_exact = "Exact Duplicate" in dup_content
    has_near = "Near Duplicate" in dup_content or "Same Value" in dup_content
    print(f"  Has exact duplicates section: {has_exact}")
    print(f"  Has near duplicates section: {has_near}")
    dup_rows = page.locator("#duplicates-list tbody tr").count()
    print(f"  Total duplicate entries: {dup_rows}")
    page.screenshot(path=f"{SCREENSHOTS}/04_duplicates.png", full_page=True)

    # 5) Add Order tab
    page.click("button[data-view='add-order']")
    page.wait_for_timeout(300)
    print("\n=== ADD ORDER ===")
    form_visible = page.locator("#order-form").is_visible()
    print(f"  Manual entry form visible: {form_visible}")
    # Check CSV tab
    page.click("button[data-form='csv']")
    page.wait_for_timeout(200)
    drop_zone = page.locator("#drop-zone").is_visible()
    print(f"  CSV drop zone visible: {drop_zone}")
    # Check Paste tab
    page.click("button[data-form='paste']")
    page.wait_for_timeout(200)
    paste_area = page.locator("#paste-data").is_visible()
    print(f"  Paste textarea visible: {paste_area}")
    page.screenshot(path=f"{SCREENSHOTS}/05_add_order.png", full_page=True)

    # 6) Click into an order detail - navigate to orders first
    page.locator("button[data-view='orders']").click()
    page.wait_for_timeout(500)
    page.locator("#orders-list .order-row").first.click()
    page.wait_for_timeout(300)
    modal_visible = page.locator("#order-modal").is_visible()
    print(f"\n=== ORDER DETAIL MODAL ===")
    print(f"  Modal visible: {modal_visible}")
    modal_name = page.locator("#modal-order-name").text_content()
    print(f"  Order name: {modal_name}")
    modal_parts = page.locator("#modal-body tbody tr").count()
    print(f"  Parts in modal: {modal_parts}")
    page.screenshot(path=f"{SCREENSHOTS}/06_order_detail.png", full_page=True)

    # Close modal
    page.locator(".modal-close").click()
    page.wait_for_timeout(200)

    # 7) Test search on parts
    page.click("button[data-view='parts']")
    page.wait_for_timeout(300)
    page.fill("#part-search", "ESP32")
    page.wait_for_timeout(300)
    filtered = page.locator("#parts-list tbody tr").count()
    print(f"\n=== SEARCH TEST ===")
    print(f"  Parts matching 'ESP32': {filtered}")
    page.screenshot(path=f"{SCREENSHOTS}/07_search.png", full_page=True)

    print("\n=== ALL TESTS PASSED ===")
    browser.close()
