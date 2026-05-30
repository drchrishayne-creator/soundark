// ============================================================
// SoundArk — Configuration File
// ============================================================
// Replace each placeholder below with your actual keys.
// This file is loaded before index.html scripts.
// ============================================================

const CONFIG = {

  supabase: {
    url:     'https://fijhgqlqlqmtkgqduldv.supabase.co',
    // Found in: Supabase Dashboard → Project Settings → API → Project URL
    // Example: 'https://fijhgqlqlqmtkgqduldv.supabase.co'

    anonKey: 'sb_publishable_UXAqK65RG943JoXjzw80WQ_6fhiB2BV',
    // Found in: Supabase Dashboard → Project Settings → API → anon / public key
  },

  mapbox: {
    token: 'pk.eyJ1IjoiY2hyaXNoYXluZSIsImEiOiJjbXByM25uYjMwcHI0MnpyM2RxcHZuY2FxIn0.sIPHMdfNRB74lrkLUwsLig',
    // Found in: mapbox.com → Account → Access Tokens → SoundArk token
    // Remember to set Allowed URLs in Mapbox to include your GitHub Pages domain
  },

  map: {
    style:  'mapbox://styles/mapbox/outdoors-v12',
    center: [-2.5, 52.5],   // Default map centre (UK)
    zoom:   5.5              // Default zoom level
  },
  inviteCode: 'soundArk2026',
  adminEmail: 'chris.hayne@icloud.com'
};
