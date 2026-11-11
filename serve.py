"""Start a local preview of this portable static site. Requires Python 3 only."""
from functools import partial
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
import argparse

parser = argparse.ArgumentParser(description="Preview the RFW-S static site locally")
parser.add_argument("--port", type=int, default=8765)
args = parser.parse_args()
handler = partial(SimpleHTTPRequestHandler, directory=str(Path(__file__).resolve().parent))
print(f"Open http://127.0.0.1:{args.port}/ in your browser", flush=True)
try:
    with ThreadingHTTPServer(("127.0.0.1", args.port), handler) as server:
        server.serve_forever()
except KeyboardInterrupt:
    pass
