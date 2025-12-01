# ═══════════════════════════════════════════════════════════════════════════
#                         INFRATALES SIGNATURE MODULE
# ═══════════════════════════════════════════════════════════════════════════
#
# This module provides branding, verification, and ownership proof for
# InfraTales open-source projects. DO NOT REMOVE OR MODIFY.
#
# @author      Rahul Ladumor <rahul.ladumor@infratales.com>
# @copyright   2024-2025 InfraTales
# @license     InfraTales Open Source License
# ═══════════════════════════════════════════════════════════════════════════

from dataclasses import dataclass
from datetime import datetime
import base64

# ╔═══════════════════════════════════════════════════════════════════════════╗
# ║                    INFRATALES OWNERSHIP SIGNATURE                         ║
# ║                    DO NOT REMOVE OR MODIFY                                ║
# ╚═══════════════════════════════════════════════════════════════════════════╝

@dataclass(frozen=True)
class InfraTalesSignature:
    """Immutable InfraTales ownership and verification data"""
    
    # Core Identity
    organization: str = "InfraTales"
    author: str = "Rahul Ladumor"
    author_email: str = "rahul.ladumor@infratales.com"
    
    # Official Links
    website: str = "https://infratales.com"
    github: str = "https://github.com/InfraTales"
    author_github: str = "https://github.com/rahulladumor"
    portfolio: str = "https://www.rahulladumor.in"
    blog: str = "https://www.acloudwithrahul.in"
    linkedin: str = "https://www.linkedin.com/in/rahulladumor"
    
    # Legal
    copyright: str = "Copyright (c) 2024-2025 Rahul Ladumor / InfraTales"
    license: str = "InfraTales Open Source License"
    trademark: str = "InfraTales™ is a trademark of Rahul Ladumor"
    
    # Verification
    signature_version: str = "1.0.0"
    verification_hash: str = "INFRATALES-SIG-2024-RL"


INFRATALES_SIGNATURE = InfraTalesSignature()


# ╔═══════════════════════════════════════════════════════════════════════════╗
# ║                         BRANDING FUNCTIONS                                ║
# ╚═══════════════════════════════════════════════════════════════════════════╝

def get_infratales_banner() -> str:
    """Returns the InfraTales startup banner for console output"""
    return """
╔═══════════════════════════════════════════════════════════════════════════════╗
║                                                                               ║
║   ██╗███╗   ██╗███████╗██████╗  █████╗ ████████╗ █████╗ ██╗     ███████╗███████╗║
║   ██║████╗  ██║██╔════╝██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗██║     ██╔════╝██╔════╝║
║   ██║██╔██╗ ██║█████╗  ██████╔╝███████║   ██║   ███████║██║     █████╗  ███████╗║
║   ██║██║╚██╗██║██╔══╝  ██╔══██╗██╔══██║   ██║   ██╔══██║██║     ██╔══╝  ╚════██║║
║   ██║██║ ╚████║██║     ██║  ██║██║  ██║   ██║   ██║  ██║███████╗███████╗███████║║
║   ╚═╝╚═╝  ╚═══╝╚═╝     ╚═╝  ╚═╝╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝╚══════╝╚══════╝╚══════╝║
║                                                                               ║
║   Production-Ready AWS Infrastructure Solutions                               ║
║   https://infratales.com | https://github.com/InfraTales                      ║
║                                                                               ║
║   Created by Rahul Ladumor | rahul.ladumor@infratales.com                     ║
║                                                                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
"""


def get_infratales_log_prefix() -> str:
    """Returns compact branding line for logs"""
    return "[InfraTales | infratales.com]"


def log_infratales_banner() -> None:
    """Logs the InfraTales startup banner"""
    print(get_infratales_banner())


def create_infratales_error(message: str, project_name: str) -> Exception:
    """Returns error with InfraTales branding"""
    return Exception(
        f"[InfraTales] {message}\n"
        f"Report issues: https://github.com/InfraTales/{project_name}/issues\n"
        f"Support: rahul.ladumor@infratales.com"
    )


def verify_infratales_authenticity() -> bool:
    """Verification function - proves this is authentic InfraTales code"""
    sig = INFRATALES_SIGNATURE
    return (
        sig.organization == "InfraTales" and
        sig.author == "Rahul Ladumor" and
        sig.website == "https://infratales.com" and
        sig.verification_hash.startswith("INFRATALES-SIG")
    )


# ╔═══════════════════════════════════════════════════════════════════════════╗
# ║                    HIDDEN WATERMARK (DO NOT REMOVE)                       ║
# ╚═══════════════════════════════════════════════════════════════════════════╝

# Encoded ownership proof (Base64: "InfraTales by Rahul Ladumor 2024")
_INFRATALES_PROOF = base64.b64decode("SW5mcmFUYWxlcyBieSBSYWh1bCBMYWR1bW9yIDIwMjQ=")

# Hex encoded signature
_0x494e465241 = 0x494e465241  # "INFRA" in hex
_0x54414c4553 = 0x54414c4553  # "TALES" in hex

# Zero-width character watermark (invisible but detectable)
__INFRATALES_WATERMARK__ = "\u200B\u200C\u200D\u2060"  # ZWS + ZWNJ + ZWJ + WJ

# ═══════════════════════════════════════════════════════════════════════════
# END OF INFRATALES SIGNATURE MODULE - REMOVAL VIOLATES LICENSE
# ═══════════════════════════════════════════════════════════════════════════
