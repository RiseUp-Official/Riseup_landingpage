import { doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "./firebase";

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export interface WaitlistEntry {
  email: string;
  timestamp: Timestamp;
  source: string; // 'hero' | 'cta' | 'footer'
}

/**
 * Validates email format
 */
export const validateEmail = (email: string): boolean => {
  return emailRegex.test(email.trim().toLowerCase());
};

/**
 * Adds email to waitlist using email as document ID
 * This prevents duplicates automatically
 */
export const addToWaitlist = async (
  email: string,
  source: string = "unknown"
): Promise<{ success: boolean; message: string }> => {
  try {
    // Validate email format
    if (!validateEmail(email)) {
      return {
        success: false,
        message: "Please enter a valid email address",
      };
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Create a safe document ID from email (replace @ and . with _)
    const docId = normalizedEmail.replace(/[@.]/g, '_');

    // Use setDoc with merge to update if exists
    const waitlistDocRef = doc(db, "waitlist", docId);

    await setDoc(waitlistDocRef, {
      email: normalizedEmail,
      timestamp: Timestamp.now(),
      source: source,
      lastUpdated: Timestamp.now(),
    }, { merge: true });

    return {
      success: true,
      message: "Successfully joined the waitlist!",
    };
  } catch (error: any) {
    console.error("Error adding to waitlist:", error);

    // Check for permission errors
    if (error?.code === 'permission-denied') {
      return {
        success: false,
        message: "Unable to join waitlist. Please check your connection and try again.",
      };
    }

    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }
};
