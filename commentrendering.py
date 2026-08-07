import re
from html import escape

# 🦖 Dino Emote Registry Marketplace
DINO_EMOTES = {
    ":trex_roar:": "https://dinosaurmod.co/emotes/trex_roar.png",
    ":dino_laugh:": "https://dinosaurmod.co/emotes/dino_laugh.png",
    ":dino_cry:": "https://dinosaurmod.co/emotes/dino_cry.png",
    ":dino_angry:": "https://dinosaurmod.co/emotes/dino_angry.png",
    ":dino_confused:": "https://dinosaurmod.co/emotes/dino_confused.png",
    ":dino_sleep:": "https://dinosaurmod.co/emotes/dino_sleep.png",
    ":dino_bruh:": "https://dinosaurmod.co/emotes/dino_bruh.png",
    ":dino_wtf:": "https://dinosaurmod.co/emotes/dino_wtf.png",
    ":meteor_hype:": "https://dinosaurmod.co/emotes/meteor_hype.png"
}

# 🦕 Replace emote codes with <img> tags
def render_emotes(text: str) -> str:
    for code, url in DINO_EMOTES.items():
        img_tag = f'<img src="{url}" class="dino-emote">'
        text = text.replace(code, img_tag)
    return text

# 🌋 Basic markdown (bold + italics)
def render_markdown(text: str) -> str:
    text = re.sub(r"\*\*(.*?)\*\*", r"<strong>\1</strong>", text)
    text = re.sub(r"\*(.*?)\*", r"<em>\1</em>", text)
    return text

# 🦖 Full comment renderer
def render_comment(raw_text: str) -> str:
    safe = escape(raw_text)                 # prevent HTML injection
    md = render_markdown(safe)              # apply markdown
    emotes = render_emotes(md)              # apply emotes
    return f'<div class="dino-comment">{emotes}</div>'
