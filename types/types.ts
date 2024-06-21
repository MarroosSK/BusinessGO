//BUSINESS
interface Category {
  alias: string;
  title: string;
}

interface Coordinates {
  latitude: number;
  longitude: number;
}

interface Location {
  address1: string;
  address2: string | null;
  address3: string;
  city: string;
  zip_code: string;
  country: string;
  state: string;
  display_address: string[];
}

export interface Business {
  id: string;
  alias: string;
  name: string;
  image_url: string;
  is_closed: boolean;
  url: string;
  review_count: number;
  categories: Category[];
  rating: number;
  coordinates: Coordinates;
  transactions: string[];
  location: Location;
  phone: string;
  display_phone: string;
  distance: number;
}

interface Region {
  center: Coordinates;
}

export interface BusinessDataI {
  businesses: Business[];
  total: number;
  region: Region;
}
//HOURS
export interface OpenHours {
  is_overnight: boolean;
  start: string;
  end: string;
  day: number;
}

export interface BusinessHoursI {
  open: OpenHours[];
  hours_type: string;
  is_open_now: boolean;
}

//REVIEWS
export interface ReviewsDataI {
  reviews: [
    {
      rating: number;
      text: string;
      url: string;
      time_created: string;
      user: {
        image_url: string;
        name: string;
      };
    }
  ];
}
